"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BorderBeam } from "@/components/ui/border-beam"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      setPosition({ x: x * 0.3, y: y * 0.3 })
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          "group relative overflow-hidden rounded-full px-10 py-5 text-lg font-medium tracking-wide",
          "bg-transparent text-white",
          "transition-colors duration-300",
          className
        )}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Shining border effect */}
        <BorderBeam 
          size={200} 
          duration={15} 
          delay={0} 
          borderWidth={2} 
          colorFrom="#ffffff" 
          colorTo="#939393"
        />
        
        {/* Animated background on hover */}
        <span className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/10 transition-all duration-500 ease-out" />
        
        {/* Glow effect */}
        <span className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-white/20" />

        {/* Content wrapper */}
        <span className="relative z-10 flex items-center justify-center min-w-[100px] min-h-[32px]">
          {children}
        </span>
      </motion.button>
    )
  }
)

MagneticButton.displayName = "MagneticButton"

