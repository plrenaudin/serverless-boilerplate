import "isomorphic-unfetch";
import Link from "next/link";
import "./index.less";

export default ({ children }) => (
  <>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
    <main>{children}</main>
  </>
);
