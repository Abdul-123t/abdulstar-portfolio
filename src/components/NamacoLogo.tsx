import React from 'react';

interface NamacoLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const NamacoLogo: React.FC<NamacoLogoProps> = ({
  className = '',
  variant = 'light',
  showSubtitle = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';
  const primaryColor = isLight ? '#FFFFFF' : '#000000';
  const subtitleColor = isLight ? '#A3A3A3' : '#525252';

  const sizeDimensions = {
    sm: { symbol: 20, fontNamaco: 'text-xs', fontSub: 'text-[7px]' },
    md: { symbol: 28, fontNamaco: 'text-sm', fontSub: 'text-[8px]' },
    lg: { symbol: 40, fontNamaco: 'text-lg', fontSub: 'text-[10px]' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Geometric 'N' Symbol */}
      <svg
        width={sizeDimensions.symbol}
        height={sizeDimensions.symbol * 1.1}
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Left vertical pillar */}
        <path
          d="M10 10V100H28V30L10 10Z"
          fill={primaryColor}
        />
        {/* Center thick diagonal bridge */}
        <path
          d="M10 10L90 85V100L10 25V10Z"
          fill={primaryColor}
        />
        {/* Right vertical pillar */}
        <path
          d="M72 10V80L90 100V10H72Z"
          fill={primaryColor}
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold tracking-wider ${sizeDimensions.fontNamaco}`}
          style={{ color: primaryColor, letterSpacing: '0.15em' }}
        >
          NAMACO
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-semibold tracking-widest mt-1 ${sizeDimensions.fontSub}`}
            style={{ color: subtitleColor, letterSpacing: '0.22em' }}
          >
            TECHNOLOGY NIGERIA LIMITED
          </span>
        )}
      </div>
    </div>
  );
};
