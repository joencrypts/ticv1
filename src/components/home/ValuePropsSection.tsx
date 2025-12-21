import { Lightbulb, Users, Rocket, Shield, Globe } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import React from "react";

const values = [
  {
    title: "Guidance",
    description: "Real insights from operators.",
    icon: <Lightbulb className="h-4 w-4 text-white" />,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
  },
  {
    title: "Network",
    description: "Collective solutions.",
    icon: <Users className="h-4 w-4 text-white" />,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
  },
  {
    title: "Capital",
    description: "Priority introductions.",
    icon: <Rocket className="h-4 w-4 text-white" />,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
  },
  {
    title: "Partnership",
    description: "Decades, not quarters.",
    icon: <Shield className="h-4 w-4 text-white" />,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
  },
  {
    title: "Global Reach",
    description: "Expanding horizons worldwide.",
    icon: <Globe className="h-4 w-4 text-white" />,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
  }
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="white"
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 group-hover:bg-black/40 group-hover:border-white/30 transition-all duration-300 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-display text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem] uppercase tracking-wide">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem] opacity-80 font-light">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const ValuePropsSection = () => {
  return (
    <section className="relative w-full px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {values.map((value) => (
            <GridItem
              key={value.title}
              area={value.area}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValuePropsSection;
