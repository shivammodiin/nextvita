import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = ({ HeroComp }) => {
  const [width, setWidth] = React.useState(0);
  if (typeof window !== "undefined") {
    React.useEffect(() => {
      setWidth(window.innerWidth);
    }, [window.innerWidth]);
  }
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          <a>
            <Image src="/logo.png" alt="img-logo" width="211" height="60" />
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <Image
              src="/logo2.png"
              alt="img-logo-mobile"
              width="60"
              height="60"
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/shivammodi456/nextvita"
              aria-label="NextVita-Github"
              target="_blank"
              rel="noopener"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      {HeroComp && <HeroComp />}
    </header>
  );
};

export default Header;
