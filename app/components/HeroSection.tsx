"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import Threads from "./Backgrounds/Threads/Threads";
import DecryptedText from "./TextAnimations/DecryptedText/DecryptedText";
import RotatingText from "./TextAnimations/RotatingText/RotatingText";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0]);

  return (
    <section className="min-h-screen relative overflow-hidden py-24 md:py-0">
      {/* Background Threads */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <Threads
          amplitude={0.5}
          distance={0.65}
          enableMouseInteraction={true}
        />
      </motion.div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {/*             
            <ShinyText
              className="text-4xl md:text-7xl font-bold"
              text="Arav Bhardwaj"
            /> */}
            <DecryptedText
              text="Arav Bhardwaj"
              animateOn="view"
              encryptedClassName="text-4xl md:text-7xl font-bold"
              maxIterations={10}
              speed={100}
              revealDirection="center"
              className="text-4xl md:text-7xl font-bold"
            />
            <div className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto flex flex-wrap items-baseline justify-center gap-2">
              <span>A passionate developer with expertise in</span>
              <RotatingText
                texts={[
                  "machine learning",
                  "software engineering",
                  "full stack development",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-white/5 backdrop-blur-sm text-gray-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.01}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Currently working as a Full Stack Developer at{" "}
              <span className="text-purple-400">KariniAI</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">
              TypeScript
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">
              React & Next.js
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">
              Node.js
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">
              Python
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-400 text-xs md:text-sm">
              LangChain
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-500/10 rounded-full text-orange-400 text-xs md:text-sm">
              AWS
            </span>
          </div>
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
