"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function useGridLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ vertical: 500, horizontal: 800 });

  useEffect(() => {
    const updateLayout = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      if (rect.width > 50 && rect.height > 50) {
        setLayout({
          vertical: Math.floor(rect.height),
          horizontal: Math.floor(rect.width),
        });
      }
    };

    updateLayout(); // Run immediately
    
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return {
    layout,
    containerRef,
  };
}

function generateFixedGrid(width: number, height: number): { x: number; y: number }[] {
  const squares: { x: number; y: number }[] = [];
  const size = 24;
  const spacing = size * 3;
  
  // Ensure we have some reasonable dimensions to work with
  const safeWidth = Math.max(width, 500);
  const safeHeight = Math.max(height, 400);
  
  // Generate a grid of points spaced evenly
  for (let x = size; x < safeWidth - size; x += spacing) {
    for (let y = size; y < safeHeight - size; y += spacing) {
      squares.push({ x, y });
    }
  }
  
  // If we have too many points, thin them out
  if (squares.length > 30) {
    return squares.filter((_, i) => i % 3 === 0);
  }
  
  return squares;
}

function Grid() {
  const {
    layout: { vertical, horizontal },
    containerRef,
  } = useGridLayout();

  // Only run grid generation on the client side
  const [clientSquares, setClientSquares] = useState<{ x: number; y: number }[]>([]);
  const [activeSquares, setActiveSquares] = useState(new Set<number>());
  
  // Generate grid after mount (client-side only)
  useEffect(() => {
    const fixedGrid = generateFixedGrid(horizontal, vertical);
    setClientSquares(fixedGrid);
    console.log("Generated grid with", fixedGrid.length, "squares");
  }, [horizontal, vertical]);

  // Activate random squares periodically
  useEffect(() => {
    if (clientSquares.length === 0) return;
    
    const activateRandomSquares = () => {
      const newActiveSquares = new Set<number>();
      const numToActivate = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < numToActivate; i++) {
        if (clientSquares.length > 0) {
          const randomIndex = Math.floor(Math.random() * clientSquares.length);
          const square = clientSquares[randomIndex];
          newActiveSquares.add(square.x + square.y);
        }
      }
      
      setActiveSquares(newActiveSquares);
    };
    
    // Initial activation
    activateRandomSquares();
    
    const interval = setInterval(activateRandomSquares, 2000);
    return () => clearInterval(interval);
  }, [clientSquares]);

  const onMouseEnter = useCallback(() => {
    if (clientSquares.length === 0) return;
    
    const newActiveSquares = new Set<number>();
    const burstSize = Math.floor(Math.random() * 3) + 2;
    
    for (let i = 0; i < burstSize; i++) {
      const randomIndex = Math.floor(Math.random() * clientSquares.length);
      const square = clientSquares[randomIndex];
      newActiveSquares.add(square.x + square.y);
    }
    
    setActiveSquares(newActiveSquares);
  }, [clientSquares]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full min-h-[400px] w-full overflow-hidden"
      onClick={onMouseEnter}
      suppressHydrationWarning
    >
      {clientSquares.map(({ x, y }, i) => {
        const isActive = activeSquares.has(x + y);
        
        return (
          <div
            key={`${x}-${y}-${i}`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              zIndex: 1
            }}
            onMouseEnter={onMouseEnter}
            className="absolute h-6 w-6 rounded-md bg-transparent p-px group cursor-pointer"
            suppressHydrationWarning
          >
            <div
              className={cn(
                "h-full w-full scale-90 rounded bg-white/50 opacity-0 transition-all duration-700",
                {
                  "scale-100 opacity-100": isActive,
                  "group-hover:scale-100 group-hover:opacity-30": !isActive,
                },
              )}
              suppressHydrationWarning
            />
          </div>
        );
      })}
    </div>
  );
}

function ClientOnlyGrid(props) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return <div className="absolute inset-0 h-full min-h-[400px] w-full" />;
  }
  
  return <Grid {...props} />;
}

export default function InteractiveGrid({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div
      className={cn("relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl", className)}
      style={{
        backgroundImage:
          "bg-zinc-950",
      }}
    >
      <ClientOnlyGrid />
      <div className={cn("relative mx-auto h-full w-fit", contentClassName)}>{children}</div>
    </div>
  );
}