import Image from "next/image";
import Link from "next/link";

const Header = ({ HeroComp }) => (
  <header>
    <nav>
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="img-logo" width="211" height="60" />
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

export default Header;
