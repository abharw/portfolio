"use client";

import { DotmSquare4 } from "@/components/ui/dotm-square-4";

export function Sigil() {
  return (
    <div className="mh__sigil" aria-hidden="true">
      <DotmSquare4
        size={32}
        dotSize={4}
        speed={1.2}
        bloom
      />
    </div>
  );
}
