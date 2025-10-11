"use client"

import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  fullWidth?: boolean
  className?: string
}

const directionVariants: Record<string, { hidden: any; visible: any }> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  fullWidth = false,
  className = "",
}: FadeInProps) {
  const variants: Variants = directionVariants[direction]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants}
      className={fullWidth ? className : `${className}`}
    >
      {children}
    </motion.div>
  )
}
