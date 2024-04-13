import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    //intro section
    <div className="custom-h-1-2 lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
      {/* navigation bar */}
      <Navbar />
      {/* full image */}
      <img
        className="absolute bottom-0 lg:left-0 mx-auto right-0 h-5/6 object-cover "
        src={"/assets/man.png"}
        alt="my-image"
      />
      {/* circle*/}
      <div className="hidden lg:block  absolute -bottom-1/4 w-big h-big bg-indigo-900 right-0 left-0 mx-auto rounded-full -z-10 "></div>
      {/* animated text */}
      <div className="absolute top-1/3">
        <span className="text-gray-600">Full Stack</span>
        <div className="text-red-500">Developer</div>
      </div>
    </div>
  );
}
