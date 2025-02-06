import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { CodeBlock } from "../components/code-block.tsx";

const SERVE_FILES = `app.get(
  "/public/*",
  useServeFiles({
    directory: resolve(Deno.cwd(), "public")
  }),
);`;

const NO_INDEX_HTML = `app.get(
  "/public/*",
  useServeFiles({
    directory: resolve(Deno.cwd(), "public"),
    serveIndex: false,
  }),
);`;

export const ServingFilesPage = () => {
  return (
    <Page description="Learn about Mage" title="Serving files">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cors" isCurrent>
            Serving files
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Serving files</Heading>
        <Text as="p" size="lg">
          You can serve files from a folder via a middleware provided by Mage.
        </Text>

        <Heading level={2}>Serving from a route</Heading>
        <Text as="p">
          Serve files from a specific folder on a specific wildcard route via
          {" "}
          <Text as="code">useServeFiles()</Text> middleware.
        </Text>
        <CodeBlock>{SERVE_FILES}</CodeBlock>
        <Text as="p" bold>
          NOTE: The configured route must be a wildcard (*) route.
        </Text>

        <Heading level={2}>Stop serving index.html</Heading>
        <Text as="p">
          By default the middleware will serve <Text as="code">index.html</Text>
          {" "}
          if the requested path is a directory and the file is present. You can
          disable this behavior by setting the <Text as="code">serveIndex</Text>
          {" "}
          option to <Text as="code">false</Text>.
        </Text>
        <CodeBlock>{NO_INDEX_HTML}</CodeBlock>
      </div>
    </Page>
  );
};
