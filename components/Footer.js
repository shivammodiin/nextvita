import Link from "next/link";

const Footer = () => (
  <footer>
    <hr />
    <p>
      Made with ❤ in{" "}
      <Link href="/">
        <a
          href="https://github.com/shivammodi456/nextvita"
          aria-label="NextVita"
          target="_blank"
          rel="noopener"
        >
          NextVita ↗
        </a>
      </Link>
    </p>
  </footer>
);

export default Footer;
