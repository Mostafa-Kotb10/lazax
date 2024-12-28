import MenuIcon from "@/assets/menu.svg";
import Logo from "@/assets/logosaas.png";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navigation = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Larax Logo" height={40} width={40} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden items-center gap-6 text-black/60 md:flex">
            <Link href="#">About</Link>
            <Link href="#">Features</Link>
            <Link href="#">Customers</Link>
            <Link href="#">Updates</Link>
            <Link href="#">Help</Link>
            <Button>Get for free</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
