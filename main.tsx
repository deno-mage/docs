import {
  MageApp,
  StatusCode,
  useSecurityHeaders,
  useServeFiles,
} from "@mage/server";
import { IndexPage } from "./pages/index.tsx";

const isDeployed = Deno.env.has("DENO_DEPLOYMENT_ID");

const app = new MageApp();

if (isDeployed) {
  app.use(useSecurityHeaders());
}

app.get("/", (context) => {
  context.render(StatusCode.OK, <IndexPage />);
});

app.get("/public/*", useServeFiles({ directory: "./public" }));

app.run({
  port: 8000,
  onListen({ hostname, port }) {
    console.log(`Listening on http://${hostname}:${port}`);
  },
});
