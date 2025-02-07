import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { CodeBlock } from "../components/code-block.tsx";

const TEST_SERVER = `import { MageApp } from "@mage/server";

const TEST_PORT_FLOOR = 60000;

export class MageTestServer {
  private _app: MageApp = new MageApp();
  private _server: Deno.HttpServer<Deno.NetAddr> | undefined;

  public get app() {
    return this._app;
  }

  start(port?: number) {
    this._server = Deno.serve(
      {
        port: port ?? Math.floor(Math.random() * 1000) + TEST_PORT_FLOOR,
      },
      this._app.build(),
    );
  }

  url(path: string) {
    return new URL(
      path,
      \`http://\${this._server?.addr.hostname}:\${this._server?.addr.port}\`,
    );
  }

  async stop() {
    await this._server?.shutdown();
  }
}`;

const TEST_JSON_RESPONSE =
  `import { afterAll, beforeAll, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { StatusCode } from "@mage/server";
import { MageTestServer } from "./test-server.ts";

let server: MageTestServer;

beforeAll(() => {
  server = new MageTestServer();

  server.app.get("/hello", (context) => {
    context.json(StatusCode.OK, { message: "Hello, World!" });
  });

  server.start();
});

afterAll(async () => {
  await server.stop();
});

describe("responses - json", () => {
  it("should return json response", async () => {
    const response = await fetch(server.url("/hello"), {
      method: "GET",
    });

    expect(response.status).toBe(StatusCode.OK);
    expect(response.headers.get("content-type")).toBe(
      "application/json; charset=UTF-8",
    );
    expect(await response.json()).toEqual({ message: "Hello, World!" });
  });
});`;

export const TestingPage = () => {
  return (
    <Page description="Learn about Mage" title="Testing">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/testing" isCurrent>
            Testing
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Testing</Heading>
        <Text as="p" size="lg">
          Mage is passionate about testing. Here is an insight into how we test
          our Mage apps.
        </Text>

        <Heading level={2}>Test server</Heading>
        <Text as="p">
          A common approach to testing Mage apps is to use a test server to run
          the app in a test environment. Here is a utility we use ourselves to
          bootstrap mage apps in test suites.
        </Text>
        <CodeBlock>{TEST_SERVER}</CodeBlock>
        <Text as="p">
          It creates a Mage app instance for you to register your routes and
          middleware on. You can start the server on a random port or a specific
          port. It provides a method to obtain the URL of the server and a way
          to stop the server.
        </Text>

        <Heading level={2}>Testing a JSON route</Heading>
        <Text as="p">
          Here is an example of how you can test a route that returns a JSON
          response. This test uses the test server utility from above to start a
          server and test a route that returns a JSON response.
        </Text>
        <CodeBlock>{TEST_JSON_RESPONSE}</CodeBlock>
      </div>
    </Page>
  );
};
