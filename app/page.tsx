import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    //intro section
    <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
      {/* navigation bar */}
      <Navbar />
      {/* full image */}
      <img
        className="absolute bottom-0 right-0 h-5/6 "
        src={"/assets/man.png"}
        alt="my-image"
      />
      {/* circle*/}
      <div className="hidden lg:block -bottom-1/4 absolute w-big h-big bg-indigo-900 right-0 left-0 mx-auto rounded-full -z-10 "></div>
      {/* //intro content */}
      <div></div>
    </div>
  );
}
