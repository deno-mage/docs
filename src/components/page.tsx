import type { ComponentChildren } from "preact";
import { GitHub } from "./github.tsx";
import { NavList } from "./nav-list.tsx";
import { Heading } from "./heading.tsx";
import { assetURL } from "../assets.ts";

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
        <link
          rel="icon"
          type="image/x-icon"
          href={assetURL("/public/favicon.ico")}
        />
        <title>Mage {props.title && `| ${props.title}`}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={assetURL("/public/main.css")} />
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
        <div className="flex flex-col max-w-screen-lg mx-auto px-4 min-h-screen">
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

          <div className="grow">
            <div className="flex flex-col lg:flex-row gap-8 pt-4 pb-12 max-w-full">
              <aside>
                <NavList />
              </aside>
              <main className="flex gap-4 flex-grow max-w-full">
                {props.children}
              </main>
            </div>
          </div>

          <footer className="px-4 py-8 border-t-1 border-slate-800 text-center">
            Copyright © {new Date().getFullYear()} Mage authors
          </footer>
        </div>
        {/* Highlight.js */}
        <script>hljs.highlightAll();</script>
        {/* Highlight.js - end */}
      </body>
    </html>
  );
};
