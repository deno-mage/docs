import type { ComponentChildren } from "preact";
import { GitHub } from "./github.tsx";
import { NavList } from "./nav-list.tsx";
import { Heading } from "./heading.tsx";

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
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <title>Mage {props.title && `| ${props.title}`}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/public/main.css" />
        {/* Highlight.js */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/a11y-dark.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js" />
        {/* Highlight.js - end */}
      </head>
      <body className="subpixel-antialiased bg-white text-slate-800">
        <div className="max-w-screen-lg mx-auto px-4">
          <header className="flex gap-4 justify-between items-center p-4 border-b-1 border-slate-800">
            <div className="text-6xl" aria-hidden>
              🧙‍♂️
            </div>
            <div className="flex w-full gap-4 justify-between items-center">
              <div aria-hidden>
                <Heading level={1}>Mage</Heading>
              </div>
              <div>
                <GitHub />
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-8 py-4 max-w-full">
            <aside>
              <NavList />
            </aside>
            <main className="flex gap-4 flex-grow max-w-full">
              {props.children}
            </main>
          </div>
        </div>
        {/* Highlight.js */}
        <script>hljs.highlightAll();</script>
        {/* Highlight.js - end */}
      </body>
    </html>
  );
};
