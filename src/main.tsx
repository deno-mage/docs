import { MageApp } from "@mage/app";
import { useSecurityHeaders } from "@mage/app/security-headers";
import { useCSP } from "@mage/app/csp";
import { useServeFiles } from "@mage/app/serve-files";
import { render } from "@mage/preact";
import { JSX } from "preact";
import { resolve } from "jsr:@std/path";
import tailwindcss from "@tailwindcss/postcss";
import { AssetProvider } from "./utils.tsx";
import { IndexPage } from "./pages/index.tsx";
import { GettingStartedPage } from "./pages/getting-started.tsx";
import { usePostCSS } from "./utils.tsx";

const isDeployed = Boolean(Deno.env.get("DENO_DEPLOYMENT_ID"));

export const app = new MageApp();

app.use(
  usePostCSS({
    entry: "./src/main.css",
    plugins: [tailwindcss()],
    output: "./public/main.css",
  }),
);

app.use(
  useSecurityHeaders(),
  useCSP({
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js",
      ],
      upgradeInsecureRequests: isDeployed,
    },
  }),
);

const pages: [string, JSX.Element][] = [
  ["/", <IndexPage />],
  ["/getting-started", <GettingStartedPage />],
];

for (const [path, page] of pages) {
  app.get(path, async (c) => {
    await render(c, <AssetProvider buildId={c.buildId}>{page}</AssetProvider>);
  });
}

app.get(
  "/public/*",
  useServeFiles({ directory: resolve(Deno.cwd(), "./public") }),
);

Deno.serve(app.handler);
