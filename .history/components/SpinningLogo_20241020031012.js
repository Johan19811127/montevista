// components/SpinningLogo.js
import Image from 'next/image';

export default function SpinningLogo() {
  return (
    <div className="animate-spin-y ">
    <Image
      src="/Badge.png" // Replace with the path to your logo
      alt="Spinning Logo"
      width={400}
      height={500}
      className="rounded-full"
    />
  </div>
  );
}
