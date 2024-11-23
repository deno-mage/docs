import {
  MageApp,
  StatusCode,
  useSecurityHeaders,
  useServeFiles,
} from "@mage/server";
import { IndexPage } from "./pages/index.tsx";
import { resolve } from "jsr:@std/path";

const port = Deno.env.get("PORT") ?? "8000";
const isDeployed = Deno.env.has("DENO_DEPLOYMENT_ID");

const app = new MageApp();

if (isDeployed) {
  app.use(useSecurityHeaders());
}

app.get("/", (context) => {
  context.render(StatusCode.OK, <IndexPage />);
});

app.get(
  "/public/*",
  useServeFiles({ directory: resolve(Deno.cwd(), "./src/public") }),
);

Deno.serve(
  {
    port: Number(port),
  },
  app.build(),
);
