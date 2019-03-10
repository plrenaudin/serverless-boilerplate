import "isomorphic-unfetch";
import Link from "next/link";
import "./index.less";

const Navigation = () => (
  <>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </>
);

export default Navigation;
