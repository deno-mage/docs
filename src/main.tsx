import {
  contentSecurityPolicy,
  MageApp,
  StatusCode,
  useSecurityHeaders,
  useServeFiles,
} from "@mage/server";
import { IndexPage } from "./pages/index.tsx";
import { resolve } from "jsr:@std/path";
import { GettingStartedPage } from "./pages/getting-started.tsx";
import { MiddlewarePage } from "./pages/middleware.tsx";
import { RoutingPage } from "./pages/routing.tsx";
import { ResponsesPage } from "./pages/responses.tsx";
import { RequestsPage } from "./pages/requests.tsx";
import { CookiesPage } from "./pages/cookies.tsx";
import { HeadersPage } from "./pages/headers.tsx";
import { CorsPage } from "./pages/cors.tsx";
import { SecurityHeadersPage } from "./pages/security-headers.tsx";
import { ServingFilesPage } from "./pages/serving-files.tsx";
import { TestingPage } from "./pages/testing.tsx";
import { ValidationPage } from "./pages/validation.tsx";
import { WebSocketsPage } from "./pages/web-sockets.tsx";
import { PageProvider } from "./components/page-context.tsx";

const isProd = Boolean(Deno.env.get("DENO_DEPLOYMENT_ID"));

const app = new MageApp();

app.use(useSecurityHeaders(), async (context, next) => {
  contentSecurityPolicy(context, {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/typescript.min.js",
      ],
      upgradeInsecureRequests: isProd,
    },
  });

  await next();
});

app.get("/", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <IndexPage />
    </PageProvider>,
  );
});
app.get("/getting-started", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <GettingStartedPage />
    </PageProvider>,
  );
});
app.get("/middleware", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <MiddlewarePage />
    </PageProvider>,
  );
});
app.get("/routing", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <RoutingPage />
    </PageProvider>,
  );
});
app.get("/requests", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <RequestsPage />
    </PageProvider>,
  );
});
app.get("/responses", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <ResponsesPage />
    </PageProvider>,
  );
});
app.get("/cookies", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <CookiesPage />
    </PageProvider>,
  );
});
app.get("/headers", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <HeadersPage />
    </PageProvider>,
  );
});
app.get("/cors", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <CorsPage />
    </PageProvider>,
  );
});
app.get("/security-headers", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <SecurityHeadersPage />
    </PageProvider>,
  );
});
app.get("/serving-files", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <ServingFilesPage />
    </PageProvider>,
  );
});
app.get("/validation", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <ValidationPage />
    </PageProvider>,
  );
});
app.get("/web-sockets", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <WebSocketsPage />
    </PageProvider>,
  );
});
app.get("/testing", async (context) => {
  await context.render(
    StatusCode.OK,
    <PageProvider context={context}>
      <TestingPage />
    </PageProvider>,
  );
});

app.get(
  "/public/*",
  useServeFiles({ directory: resolve(Deno.cwd(), "./public") }),
);

Deno.serve(app.build());
