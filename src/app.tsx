import { MageApp } from "@mage/app";
import { securityHeaders } from "@mage/app/security-headers";
import { csp } from "@mage/app/csp";
import { serveFiles } from "@mage/app/serve-files";
import { render } from "@mage/preact";
import { JSX } from "preact";
import { IndexPage } from "./pages/index.tsx";
import { GettingStartedPage } from "./pages/getting-started.tsx";
import { BasicsPage } from "./pages/basics.tsx";
import { RoutingPage } from "./pages/routing.tsx";
import { ResponsesPage } from "./pages/responses.tsx";
import { HeadersPage } from "./pages/headers.tsx";
import { CookiesPage } from "./pages/cookies.tsx";
import { ContextDataPage } from "./pages/context-data.tsx";
import { ValidationPage } from "./pages/validation.tsx";
import { ServingFilesPage } from "./pages/serving-files.tsx";
import { CORSPage } from "./pages/cors.tsx";
import { CSPPage } from "./pages/csp.tsx";
import { CacheControlPage } from "./pages/cache-control.tsx";
import { tailwindcss } from "@mage/tailwindcss";
import { setupAssetSignal } from "./assets.ts";

const isDeployed = Boolean(Deno.env.get("DENO_DEPLOYMENT_ID"));

export const app = new MageApp();

setupAssetSignal({
  buildId: app.buildId,
});

app.plugin(
  tailwindcss({
    entry: "./src/main.css",
    output: "./public/main.css",
  }),
);

app.use(
  securityHeaders(),
  csp({
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

app.get("/", async (c) => {
  await render(c, <IndexPage />);
});

const pages: [string, JSX.Element][] = [
  ["/", <IndexPage />],
  ["/getting-started", <GettingStartedPage />],
  ["/basics", <BasicsPage />],
  ["/routing", <RoutingPage />],
  ["/responses", <ResponsesPage />],
  ["/headers", <HeadersPage />],
  ["/cookies", <CookiesPage />],
  ["/context-data", <ContextDataPage />],
  ["/validation", <ValidationPage />],
  ["/serving-files", <ServingFilesPage />],
  ["/cors", <CORSPage />],
  ["/csp", <CSPPage />],
  ["/cache-control", <CacheControlPage />],
];

for (const [path, page] of pages) {
  app.get(path, async (c) => {
    await render(c, page);
  });
}

app.get(
  "/public/*",
  serveFiles({
    directory: "./public",
  }),
);
