import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row hvh100">
          <div className="col-md-6 d-flex falign-items-center justify-content-center">
      <h1 className="h1">Monte Vista </h1>
      <h2>Primary School</h2>
      </div>
      </div>
      </div>
    </main>
  );
}
