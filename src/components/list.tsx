import { ComponentChildren } from "preact";

interface ListProps {
  children: ComponentChildren;
}

export const List = (props: ListProps) => {
  return <ul className="flex flex-col">{props.children}</ul>;
};

export const ListItem = (props: ListProps) => {
  return <li className="mb-4">{props.children}</li>;
};
