"use client"

import { cn } from "@/lib/utils"

export function TextHighlighter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "relative inline-block px-2",
        "before:absolute before:inset-0 before:-z-10 before:skew-y-[-2deg] before:bg-yellow-300 dark:before:bg-yellow-500",
        className
      )}
    >
      {children}
    </span>
  )
}


