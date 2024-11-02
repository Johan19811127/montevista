// components/AdvancedBadge.js
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AdvancedBadge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a delay for the flip-in effect
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div
        className={`${
          isVisible ? 'animate-flip-glow' : 'opacity-0'
        } w-72 h-72 relative`}
      >
        <div className="animate-bounce-slow absolute inset-0 rounded-full border-4 border-yellow-500"></div>
        <Image
          src="/badge.png" // Replace with your logo path
          alt="School Badge"
          width={400}
          height={500}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}