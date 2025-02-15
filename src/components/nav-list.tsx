import { Link } from "./link.tsx";

export const NavList = () => {
  return (
    <nav>
      <ul className="flex flex-wrap lg:flex-col gap-4 h-full justify-center lg:text-right">
        <li>
          <Link href="/getting-started">Getting started</Link>
        </li>
      </ul>
    </nav>
  );
};
