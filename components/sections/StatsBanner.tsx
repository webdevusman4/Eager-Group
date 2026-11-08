import React from 'react';
import { content } from '@/lib/content';

export const StatsBanner: React.FC = () => {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-24 md:-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {content.stats.map((stat, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={stat.label}
              className={`glass-arctic rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                isFirst ? 'md:col-span-1' : ''
              }`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-brand text-5xl md:text-6xl tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-brand/80 font-semibold text-base md:text-lg">
                  {stat.unit}
                </span>
              </div>
              <p className="mt-4 text-muted text-sm md:text-[15px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
