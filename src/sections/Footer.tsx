import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

import Container from "@/components/Container";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <Container>
        <div className="relative inline-flex">
          <div
            className="bg-logo-gradient absolute h-full w-full"
            role="none"
          />
          <Image src={logo} height={40} alt="Larax logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#" className="hover:text-white duration-150" >About</Link>
          <Link href="#" className="hover:text-white duration-150" >Features</Link>
          <Link href="#" className="hover:text-white duration-150" >Customers</Link>
          <Link href="#" className="hover:text-white duration-150" >Pricing</Link>
          <Link href="#" className="hover:text-white duration-150" >Help</Link>
          <Link href="#" className="hover:text-white duration-150" >Careers</Link>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>

        <p className="mt-6">&copy; 2024 Larax, Inc. All rights reserved.</p>
      </Container>
    </footer>
  );
};
