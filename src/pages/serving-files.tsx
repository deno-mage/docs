import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const SINGLE_FILE = `await c.file("path/to/file.txt");`;

const DIRECTORY = `import { useServeFiles } from "@mage/app/serve-files"; 

app.get(
  "/public/*",
  useServeFiles({ directory: resolve(Deno.cwd(), "./public") })
);`;

export const ServingFilesPage = () => {
  return (
    <Page description="Getting started with Mage" title="Serving Files">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/serving-files" isCurrent>
            Serving Files
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Serving Files</Heading>
        <Text as="p" size="lg">
          Mage has multiple mechanisms for serving files from the file system.
        </Text>

        <Heading level={2}>Single file</Heading>
        <Text as="p">
          You can serve a single file via a utility method on the context.
        </Text>
        <CodeBlock>{SINGLE_FILE}</CodeBlock>

        <Heading level={2}>A directory</Heading>
        <Text as="p">
          Mage provides a middleware to serve files from a directory based on a
          wildcard.
        </Text>
        <CodeBlock>{DIRECTORY}</CodeBlock>
      </div>
    </Page>
  );
};
