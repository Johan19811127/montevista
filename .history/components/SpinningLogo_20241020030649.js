// components/SpinningLogo.js
import Image from 'next/image';

export default function SpinningLogo() {
  return (
    <div className="animate-spin-y">
    <Image
      src="/logo.png" // Replace with the path to your logo
      alt="Spinning Logo"
      width={400}
      height={200}
      className="rounded-full"
    />
  </div>
  );
}
