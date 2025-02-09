import {
  cacheControl,
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
    },
  });

  await next();
});

app.get("/", async (context) => {
  await context.render(StatusCode.OK, <IndexPage />);
});

app.get("/getting-started", async (context) => {
  await context.render(StatusCode.OK, <GettingStartedPage />);
});
app.get("/middleware", async (context) => {
  await context.render(StatusCode.OK, <MiddlewarePage />);
});
app.get("/routing", async (context) => {
  await context.render(StatusCode.OK, <RoutingPage />);
});
app.get("/requests", async (context) => {
  await context.render(StatusCode.OK, <RequestsPage />);
});
app.get("/responses", async (context) => {
  await context.render(StatusCode.OK, <ResponsesPage />);
});
app.get("/cookies", async (context) => {
  await context.render(StatusCode.OK, <CookiesPage />);
});
app.get("/headers", async (context) => {
  await context.render(StatusCode.OK, <HeadersPage />);
});
app.get("/cors", async (context) => {
  await context.render(StatusCode.OK, <CorsPage />);
});
app.get("/security-headers", async (context) => {
  await context.render(StatusCode.OK, <SecurityHeadersPage />);
});
app.get("/serving-files", async (context) => {
  await context.render(StatusCode.OK, <ServingFilesPage />);
});
app.get("/validation", async (context) => {
  await context.render(StatusCode.OK, <ValidationPage />);
});
app.get("/web-sockets", async (context) => {
  await context.render(StatusCode.OK, <WebSocketsPage />);
});
app.get("/testing", async (context) => {
  await context.render(StatusCode.OK, <TestingPage />);
});

app.get(
  "/public/*",
  async (context, next) => {
    cacheControl(context, { maxAge: 60 * 60 * 24 * 7 });
    await next();
  },
  useServeFiles({ directory: resolve(Deno.cwd(), "./public") }),
);

Deno.serve(app.build());
