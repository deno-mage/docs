import { MageApp, StatusCode, useServeFiles } from "@mage/server";
import { IndexPage } from "./pages/index.tsx";
import { resolve } from "jsr:@std/path";
import { GettingStartedPage } from "./pages/getting-started.tsx";
import { MiddlewarePage } from "./pages/middleware.tsx";
import { RoutingPage } from "./pages/routing.tsx";
import { ResponsesPage } from "./pages/responses.tsx";
import { RequestsPage } from "./pages/requests.tsx";
import { CookiesPage } from "./pages/cookies.tsx";
import { HeadersPage } from "./pages/headers.tsx";
import { PrebuiltMiddlewaresPage } from "./pages/prebuilt-middlewares.tsx";

const isDeployed = Deno.env.has("DENO_DEPLOYMENT_ID");

const app = new MageApp();

if (isDeployed) {
  // todo - apply security headers when they are configurable
}

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
app.get("/prebuilt-middlewares", async (context) => {
  await context.render(StatusCode.OK, <PrebuiltMiddlewaresPage />);
});

app.get(
  "/public/*",
  useServeFiles({ directory: resolve(Deno.cwd(), "./public") }),
);

Deno.serve(app.build());
