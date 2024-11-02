export default function Parallax() {
    return (
      <div className="relative h-screen overflow-hidden">
        {/* The background layer (school) */}
        <div className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/school.jpg')", transform: 'translateZ(0)' }}
        ></div>
        
        {/* The parallax layer (child) */}
        <div className="absolute inset-0 flex items-center justify-center" 
          style={{ backgroundImage: "url('./child.jpg')", backgroundSize: 'contain', backgroundPosition: 'bottom', transform: 'translateZ(1)' }}>
          {/* You can add optional content here */}
        </div>
  
        {/* Content that overlays the hero */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our School</h1>
          <p className="text-xl">A place for education and growth</p>
        </div>
      </div>
    );
  }
  