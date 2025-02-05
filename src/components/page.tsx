import type { ComponentChildren } from "preact";
import { GitHub } from "./github.tsx";
import { NavList } from "./nav-list.tsx";

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
        <title>Mage {props.title && `| ${props.title}`}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/public/main.css" />
        {/* Highlight.js */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js" />
        {/* Highlight.js - end */}
      </head>
      <body className="subpixel-antialiased bg-white text-slate-800">
        <div className="max-w-screen-lg mx-auto px-4">
          <header className="flex gap-4 items-center p-4 border-b-2 border-slate-800">
            <div className="text-6xl" aria-hidden>
              🧙‍♂️
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <div aria-hidden>
                <span className="text-3xl font-bold block">Mage</span>
              </div>
              <div>
                <GitHub />
              </div>
            </div>
          </header>

          <div className="flex flex-wrap gap-4 py-4">
            <main className="flex flex-wrap gap-4 flex-grow">
              {props.children}
            </main>
            <aside>
              <NavList />
            </aside>
          </div>
        </div>
        {/* Highlight.js */}
        <script>hljs.highlightAll();</script>
        {/* Highlight.js - end */}
      </body>
    </html>
  );
};
