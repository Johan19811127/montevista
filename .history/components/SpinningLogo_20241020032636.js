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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div
        className={`${
          isVisible ? 'animate-elegant' : 'opacity-0'
        } relative w-64 h-64`}
      >
        <Image
          src="/badge.png" // Replace with the path to your badge image
          alt="School Badge"
          width={256}
          height={256}
          className="rounded-full shadow-xl"
        />
      </div>
    </div>
  );
}
