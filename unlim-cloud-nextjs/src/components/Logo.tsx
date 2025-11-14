'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 200 }: LogoProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/assets/unlim-clear.png"
        alt="UnlimCloud Logo"
        width={size}
        height={size}
        className="animate-pulse-scale"
        priority
      />
    </div>
  );
}
