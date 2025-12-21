import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, hover = false, intensity = "medium", children, ...props }, ref) => {
    const intensityStyles = {
      light: "bg-[hsl(0_0%_100%/0.02)] border-[hsl(0_0%_100%/0.05)]",
      medium: "bg-[hsl(0_0%_100%/0.03)] border-[hsl(0_0%_100%/0.08)]",
      strong: "bg-[hsl(0_0%_100%/0.06)] border-[hsl(0_0%_100%/0.12)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border backdrop-blur-xl",
          "shadow-[0_25px_50px_-12px_hsl(0_0%_0%/0.5)]",
          intensityStyles[intensity],
          hover && "transition-all duration-500 ease-out hover:bg-[hsl(0_0%_100%/0.05)] hover:border-[hsl(0_0%_100%/0.12)] hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[hsl(0_0%_100%/0.05)] to-transparent rounded-inherit" />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
