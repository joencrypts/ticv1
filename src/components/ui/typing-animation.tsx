"use client"

import { useEffect, useState, useRef } from "react"
import { motion, MotionProps, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

interface TypingAnimationProps extends MotionProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
  startOnView?: boolean
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:")
  }

  const MotionComponent = motion.create(Component)

  const [displayedText, setDisplayedText] = useState<string>("")
  const [started, setStarted] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  })

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(startTimeout)
    }

    if (isInView) {
      const startTimeout = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(startTimeout)
    }
  }, [delay, startOnView, isInView])

  useEffect(() => {
    if (!started) return

    let i = 0
    const intervalId = setInterval(() => {
      if (i === children.length) {
        clearInterval(intervalId)
        return
      }
      
      setDisplayedText(children.substring(0, i + 1))
      i++
    }, duration)

    return () => clearInterval(intervalId)
  }, [children, duration, started])

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  )
}
