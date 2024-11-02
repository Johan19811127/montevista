import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Badge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for the bounce-in effect
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center  bg-blue-50">
      <div
        className={`${
          isVisible ? 'animate-bounce-in' : 'opacity-0'
        } animate-pulse-once w-86 h-64`}
      >
        <Image
          src="/badge.png" // Replace with the path to your badge image
          alt="School Badge"
          width={512}
          height={512}
          className=""
        />
      </div>
    </div>
  );
}