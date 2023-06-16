import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useScreenSizeDetect(setIsSmallScreen, 500);

  return (
    <nav>
      <Link href="/">
        <Image
          src="/nav/logo.svg"
          alt="le logo de RD Tech"
          width={50}
          height={46}
          priority
        />
      </Link>
      <ul>
        <li className={router.pathname === "/mon-parcours" ? "active" : ""}>
          <Link href="/mon-parcours">
            {isSmallScreen ? "Parcours" : "Mon parcours"}
          </Link>
        </li>
        <li className={router.pathname === "/me-contacter" ? "active" : ""}>
          <Link href="/me-contacter">
            {isSmallScreen ? "Contact" : "Me contacter"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
