// components/SpinningLogo.js
import Image from 'next/image';

export default function SpinningLogo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/Badge.png" // Replace with your logo path
        alt="Spinning Logo"
        width={400}
        height={500}
        className="animate-spin-slow"
      />
    </div>
  );
}
