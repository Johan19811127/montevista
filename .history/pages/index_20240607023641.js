import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-cont">
      <h1 className="h1">Monte Vista Primary School</h1>
      </div>
      </div>
      </div>
    </main>
  );
}
