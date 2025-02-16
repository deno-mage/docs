import { Link } from "./link.tsx";

export const NavList = () => {
  return (
    <nav>
      <ul className="flex flex-wrap lg:flex-col gap-4 h-full justify-center lg:text-right">
        <li>
          <Link href="/getting-started">Getting started</Link>
        </li>
        <li>
          <Link href="/basics">Basics</Link>
        </li>
        <li>
          <Link href="/routing">Routing</Link>
        </li>
        <li>
          <Link href="/responses">Responses</Link>
        </li>
        <li>
          <Link href="/headers">Headers</Link>
        </li>
        <li>
          <Link href="/cookies">Cookies</Link>
        </li>
        <li>
          <Link href="/context-data">Context data</Link>
        </li>
        <li>
          <Link href="/validation">Validation</Link>
        </li>
        <li>
          <Link href="/serving-files">Serving files</Link>
        </li>
        <li>
          <Link href="/cors">CORS</Link>
        </li>
        <li>
          <Link href="/csp">CSP</Link>
        </li>
        <li>
          <Link href="/cache-control">Cache control</Link>
        </li>
      </ul>
    </nav>
  );
};
