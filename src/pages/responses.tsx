import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const COMMON_RESPONSES = `c.text("Hello, world!");

c.json({ message: "Hello, world!" });

c.html("<h1>Hello, world!</h1>");

c.empty();

c.notFound();`;

const SET_STATUS = `c.text("Created", 201);`;

const SET_RESPONSE = `c.res = new Response("Hello, world!");`;

const REDIRECT = `c.redirect("/"); // 307 Temporary Redirect

c.redirect("/new", 308); // 308 Permanent Redirect`;

const REMOTE_REWRITE = `await c.rewrite("https://somewhere.else");`;

const LOCAL_REWRITE = `await c.rewrite("/new");`;

const FILE = `await c.file("path/to/file.txt");`;

export const ResponsesPage = () => {
  return (
    <Page description="Getting started with Mage" title="Responses">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/responses" isCurrent>
            Responses
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Responses</Heading>
        <Text as="p" size="lg">
          Mage's context contains utility methods for configuring responses to
          requests.
        </Text>

        <Heading level={2}>Basic responses</Heading>
        <Text as="p">
          Basic responses include text, JSON, HTML, empty, and not found.
        </Text>
        <CodeBlock>{COMMON_RESPONSES}</CodeBlock>

        <Text as="p">Some utilities let you set the status.</Text>
        <CodeBlock>{SET_STATUS}</CodeBlock>

        <Text as="p">
          If you need more control over the response, you can set a response
          directly.
        </Text>
        <CodeBlock>{SET_RESPONSE}</CodeBlock>

        <Heading level={2}>Redirecting</Heading>
        <Text as="p">
          By default redirects are temporary 307 but you can change this.
        </Text>
        <CodeBlock>{REDIRECT}</CodeBlock>

        <Heading level={2}>Rewriting</Heading>
        <Text as="p">
          You can rewrite the request, internally this is a forwarded fetch.
        </Text>
        <CodeBlock>{REMOTE_REWRITE}</CodeBlock>

        <Text as="p">
          Or you can rewrite to a local path.{" "}
          <Text bold>
            (Note that this will make a full fetch request so is sub optimal
            compared to redirection locally.)
          </Text>
        </Text>
        <CodeBlock>{LOCAL_REWRITE}</CodeBlock>

        <Heading level={2}>Files</Heading>
        <Text as="p">Serve a file from the file system.</Text>
        <CodeBlock>{FILE}</CodeBlock>
      </div>
    </Page>
  );
};
