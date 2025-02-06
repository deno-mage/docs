import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { Link } from "../components/link.tsx";

const HEADERS = `app.get("/", (context) => {
  context.response.headers.set("Content-Type", "text/plain");
  context.response.headers.delete("Content-Type", "text/plain");
});`;

const TEXT = `app.get("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});`;

const JSON = `app.get("/", (context) => {
  context.json(StatusCode.OK, { message: "Hello, World!" });
});`;

const RENDER = `app.get("/", (context) => {
  await context.render(
    StatusCode.OK,
    <html lang="en">
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>,
  );
});`;

const EMPTY = `app.get("/", (context) => {
  context.empty(StatusCode.NoContent);
});`;

const REDIRECT = `app.get("/", (context) => {
  context.redirect(RedirectType.Permanent, "/new-location");
});`;

const REWRITE = `app.get("/local", async (context) => {
  await context.rewrite("/new-location");
});

app.get("/external", async (context) => {
  await context.rewrite("https://example.com");
});
`;

const SERVE_FILE = `app.get("/file", async (context) => {
  await context.serveFile("path/to/file.txt");
});`;

export const ResponsePage = () => {
  return (
    <Page description="Learn about Mage context" title="Context">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/response" isCurrent>
            Response
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Response</Heading>
        <Text as="p">
          The response is available on the context object from the beginning of
          the chain. This is the exact response object that will be sent to the
          client.
        </Text>

        <Heading level={2}>Basics</Heading>
        <Text as="p">
          The response instance is available at{" "}
          <Text as="code">context.response</Text>. You can use it to configure
          the response details such as headers.
        </Text>
        <CodeBlock>{HEADERS}</CodeBlock>

        <Heading level={2}>Response utility methods</Heading>
        <Text as="p">
          The context has utility methods to set the response content and handle
          the request.
        </Text>

        <Heading level={3}>Text</Heading>
        <Text as="p">
          Respond with text via <Text as="code">context.text()</Text>.
        </Text>
        <CodeBlock>{TEXT}</CodeBlock>

        <Heading level={3}>JSON</Heading>
        <Text as="p">
          Respond with JSON via <Text as="code">context.json()</Text>.
        </Text>
        <CodeBlock>{JSON}</CodeBlock>

        <Heading level={3}>Render</Heading>
        <Text as="p">
          Render JSX to HTML using{" "}
          <Link
            href="https://preactjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preact
          </Link>
          via <Text as="code">context.render()</Text>.
        </Text>
        <CodeBlock>{RENDER}</CodeBlock>

        <Heading level={3}>Empty</Heading>
        <Text as="p">
          Respond with an empty response via{" "}
          <Text as="code">context.empty()</Text>. This is useful for response
          like 204 No Content.
        </Text>
        <CodeBlock>{EMPTY}</CodeBlock>

        <Heading level={3}>Redirect</Heading>
        <Text as="p">
          Redirect to another URL via <Text as="code">context.redirect()</Text>.
        </Text>
        <CodeBlock>{REDIRECT}</CodeBlock>

        <Heading level={3}>Rewrite</Heading>
        <Text as="p">
          Rewrite the URL via{" "}
          <Text as="code">context.rewrite()</Text>. This works for local and
          external URLs.
        </Text>
        <CodeBlock>{REWRITE}</CodeBlock>
        <Text as="p" bold>
          NOTE: This is not optimal for local rewrites, as it will make a new
          request to the provided location. This is useful for proxying requests
          to another server.
        </Text>

        <Heading level={3}>Serve file</Heading>
        <Text as="p">
          Serve a file from the server via{" "}
          <Text as="code">context.serveFile()</Text>.
        </Text>
        <CodeBlock>{SERVE_FILE}</CodeBlock>
      </div>
    </Page>
  );
};
