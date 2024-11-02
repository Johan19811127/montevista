import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollPosition * 0.3}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background School */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('./school.')" }}
      ></div>

      {/* Child Image (Moves slower as you scroll) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url('./child.png')",
          backgroundSize: "contain",
          backgroundPositionY: "calc(100% + var(--scroll-y))",
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our School</h1>
        <p className="text-xl">A place for education and growth</p>
      </div>
    </div>
  );
}
