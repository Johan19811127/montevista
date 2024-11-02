import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate blur and opacity for the school image
      const schoolBlur = Math.max(30 - scrollPosition * 0.02, 0); // Starts at 10px blur, reduces with scroll
      const schoolOpacity = Math.min(0.1 + scrollPosition * 0.001, 0.6); // Starts at 30%, goes up to 60%

      // Calculate scale for the child image
      const childScale = Math.max(1.5 - scrollPosition * 0.001, 1); // Starts at 1.5, scales down to 1

      // Set the CSS variables dynamically
      document.documentElement.style.setProperty('--school-blur', `${schoolBlur}px`);
      document.documentElement.style.setProperty('--school-opacity', `${schoolOpacity}`);
      document.documentElement.style.setProperty('--child-scale', `${childScale}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background School Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('./school.png')",
          filter: 'blur(var(--school-blur))',
          opacity: 'var(--school-opacity)',
        }}
      ></div>

      {/* Child Image (Zooms out as you scroll) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url('./child.png')",
          backgroundSize: "contain",
          transform: 'scale(var(--child-scale))',
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
