import { ComponentChildren } from "preact";

interface LinkProps {
  href: string;
  children: ComponentChildren;
}

export const Link = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      className="underline underline-offset-2 text-blue-500 visited:text-blue-800"
    >
      {props.children}
    </a>
  );
};
