import { MageApp, StatusCode, useServeFiles } from "@mage/server";
import { IndexPage } from "./pages/index.tsx";
import { resolve } from "jsr:@std/path";
import { GettingStartedPage } from "./pages/getting-started.tsx";
import { MiddlewarePage } from "./pages/middleware.tsx";
import { RoutingPage } from "./pages/routing.tsx";

const isDeployed = Deno.env.has("DENO_DEPLOYMENT_ID");

const app = new MageApp();

if (isDeployed) {
  // todo - apply security headers when they are configurable
}

app.get("/", (context) => {
  context.render(StatusCode.OK, <IndexPage />);
});

app.get("/getting-started", (context) => {
  context.render(StatusCode.OK, <GettingStartedPage />);
});
app.get("/middleware", (context) => {
  context.render(StatusCode.OK, <MiddlewarePage />);
});
app.get("/routing", (context) => {
  context.render(StatusCode.OK, <RoutingPage />);
});

app.get(
  "/public/*",
  useServeFiles({ directory: resolve(Deno.cwd(), "./src/public") }),
);

Deno.serve(app.build());
