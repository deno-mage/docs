import type { ComponentChildren } from "preact";

interface PageProps {
  children: ComponentChildren;
  title?: string;
  description: string;
}

export const Page = (props: PageProps) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Mage Server {props.title && `| ${props.title}`}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/public/main.css" />
      </head>
      <body className="subpixel-antialiased">{props.children}</body>
    </html>
  );
};
