import Image from "next/image";
import footerLogo from "@/app/assets/kayafitLogo.png";
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/instagram';
import 'react-social-icons/x';
import 'react-social-icons/youtube'
import 'react-social-icons/linkedin';

const Footer = () => {
    return <footer className="bg-gradient-to-b from-black to-[#003016] py-10 text-center text-white">
    <div className="">
      <div className="flex justify-center">
        <Image src={footerLogo} alt="logo"height={70}/>
      </div>
      <nav className="flex flex-col gap-5 mt-5 md:flex-row md:justify-center">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Help</a>
        <a href="">Contact</a>
      </nav>
      <div className="flex justify-center gap-5 mt-5">
        <SocialIcon network="instagram" bgColor="transparent" fgColor="white"/>
        <SocialIcon network="x" bgColor="transparent" fgColor="white"/>
        <SocialIcon network="linkedin" bgColor="transparent" fgColor="white"/>
        <SocialIcon network="youtube" bgColor="transparent" fgColor="white"/>
        {/* <Insta/>
        <LinkedIn/>
        <Twitter/> */}
      </div>
      <p className="mt-6">&copy; 2025 Kayafit, Inc. All rights reserved.</p>
    </div>
  </footer>
};

export default Footer