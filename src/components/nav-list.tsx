import { Link } from "./link.tsx";

export const NavList = () => {
  return (
    <nav>
      <ul className="flex flex-wrap lg:flex-col gap-4 h-full justify-center lg:text-right">
        <li>
          <Link href="/getting-started">Getting started</Link>
        </li>
        <li>
          <Link href="/middleware">Middleware</Link>
        </li>
        <li>
          <Link href="/routing">Routing</Link>
        </li>
        <li>
          <Link href="/requests">Requests</Link>
        </li>
        <li>
          <Link href="/responses">Responses</Link>
        </li>
        <li>
          <Link href="/cookies">Cookies</Link>
        </li>
        <li>
          <Link href="/headers">Headers</Link>
        </li>
        <li>
          <Link href="/prebuilt-middlewares">Prebuilt middlewares</Link>
        </li>
      </ul>
    </nav>
  );
};
