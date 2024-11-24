import { ComponentChildren } from "preact";
import { Link } from "./link.tsx";

interface BreadcrumbListProps {
  children: ComponentChildren;
}

export const BreadcrumbList = (props: BreadcrumbListProps) => {
  return (
    <nav>
      <ul className="flex">{props.children}</ul>
    </nav>
  );
};

interface BreadcrumbItemProps {
  children: ComponentChildren;
  href: string;
  isCurrent?: boolean;
}

export const Breadcrumb = (props: BreadcrumbItemProps) => {
  return (
    <li>
      {props.isCurrent
        ? <span>{props.children}</span>
        : <Link href={props.href}>{props.children}</Link>}
      <span className="mx-2">/</span>
    </li>
  );
};
