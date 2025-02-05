import { Link } from "./link.tsx";

export const NavList = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/getting-started">Getting Started</Link>
        </li>
        <li>
          <Link href="/middleware">Middleware</Link>
        </li>
        <li>
          <Link href="/routing">Routing</Link>
        </li>
      </ul>
    </nav>
  );
};
