import Image from "next/image";

export default function Home() {
  return (
    <nav className="flex justify-between item-center bg-black text-white py-2 px-4">
      <div>
        <a className="" href="/">
          <img src="https://technext.github.io/safs/assets/images/logo.png" alt="logo"  className="max-h-10"/>
        </a>
      </div>
      <div className="float-right">
        <ul className="flex item-center gap-4 text-white">
          <li>
            <a className="hover:text-[#ffc900] transition-colors">Home</a>
          </li>
          <li>
            <a className="hover:text-[#ffc900]  transition-colors">About</a>
          </li>
          <li>
            <a className="hover:text-[#ffc900]  transition-colors">Service</a>
          </li>
          <li>
            <a className="hover:text-[#ffc900]  transition-colors">Project</a>
          </li>
          <li>
            <a className="hover:text-[#ffc900]  transition-colors">Blog</a>
          </li>
          <li>
            <a className="hover:text-[#ffc900]  transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
