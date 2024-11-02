// components/ElegantBadge.js
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ElegantBadge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for the entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center p-4 m-4 0">
      <div
        className={`${
          isVisible ? 'animate-pulse-badge' : 'opacity-0'
        } relative w-64 h-64`}
      >
        <Image
          src="/badge.png" // Replace with the path to your badge image
          alt="School Badge"
          width={256}
          height={256}
          className="rounded-none drop-shadow-2xl mb-10"
        />
      </div>
    </div>
  );
}
