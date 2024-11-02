// components/SpinningLogo.js
import Image from 'next/image';

export default function SpinningLogo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/.png" // Replace with your logo path
        alt="Spinning Logo"
        width={200}
        height={200}
        className="animate-spin-slow"
      />
    </div>
  );
}
