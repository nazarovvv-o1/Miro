import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 shadow mx-[30px]  m-auto">
      <div className="flex items-center space-x-8">
        <Link href="/"><Image src="/Icon/Navbar/Miro.svg" alt="Icon" width={91} height={32} /></Link> 
        <ul className="flex space-x-6 font-normal text-[16px] text-[#050038]">
          <div className="flex items-center gap-3.5">
          <li className="hover:scale-105 transform transition cursor-pointer">Product</li>
          <ExpandMoreIcon />
          </div>
          <div className="flex items-center gap-3.5">
          <li className="hover:scale-105 transform transition cursor-pointer">Solutions</li>
          <ExpandMoreIcon />
          </div>
          <div className="flex items-center gap-3.5">
          <li className="hover:scale-105 transform transition cursor-pointer">Resources</li>
          <ExpandMoreIcon />
          </div>
          <li className="hover:scale-105 transform transition cursor-pointer">Enterprise</li>
          <li className="hover:scale-105 transform transition cursor-pointer">Pricing</li>
        </ul>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <LanguageIcon />
          <span className="font-normal text-[16px] text-[#050038] cursor-pointer">EN</span>
          <span className="font-normal text-[16px] text-[#050038] cursor-pointer ml-4">Contact Sales</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="font-normal text-[16px] cursor-pointer text-[#050038]">Login</button>
          <button className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-4 py-2 rounded-md">
            Sign up free →
          </button>
        </div>
      </div>
    </div>
  );
}
