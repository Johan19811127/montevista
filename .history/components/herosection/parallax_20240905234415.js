export default function Parallax() {
    return (
        <div className="relative h-screen overflow-hidden">
          {/* School background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/school.png')",
            }}
          ></div>
    
          {/* Child walking toward school */}
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom"
            style={{
              backgroundImage: "url('/images/child.jpg')",
              backgroundSize: "contain",
              backgroundPositionY: "calc(100% + var(--scroll-y, 0px))", // Adjust position on scroll
            }}
          ></div>
    
          {/* Hero content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our School</h1>
            <p className="text-xl">A place for education and growth</p>
          </div>
        </div>
      );
    }