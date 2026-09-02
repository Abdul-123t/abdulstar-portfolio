import React from 'react';

interface HassanPhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  caption?: boolean;
}

export const HassanPhoto: React.FC<HassanPhotoProps> = ({
  className = '',
  size = 'md',
  caption = true,
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-56 sm:w-56 sm:h-64',
    lg: 'w-64 h-72 sm:w-80 sm:h-96',
  }[size];

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Editorial Frame */}
      <div className={`relative bg-neutral-900 border border-neutral-800 p-2 ${sizeClasses} transition-all duration-300 group-hover:border-neutral-600`}>
        {/* Inner Graphic Grid & Image Frame */}
        <div className="w-full h-full bg-[#121212] overflow-hidden relative flex flex-col justify-between p-4 border border-neutral-800">
          <div className="absolute inset-0 bg-editorial-grid opacity-30 pointer-events-none"></div>

          {/* Photo Render */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
            {/* Real photo representation using monochrome high contrast styled portrait */}
            <div className="w-full h-full relative overflow-hidden rounded-sm grayscale contrast-125 brightness-90 border border-neutral-700/50 bg-[#1a1a1a] flex items-center justify-center">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest text-center px-4">
                [ Portrait Pending ]
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Overlay Badge */}
          <div className="relative z-20 mt-3 pt-2 border-t border-neutral-800/80 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
              H. A. OLAMIDE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Active Product Builder"></span>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white/60"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white/60"></div>
      </div>

      {caption && (
        <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mt-2 text-center">
          FOUNDER · NAMACO AFFILIATED
        </p>
      )}
    </div>
  );
};
