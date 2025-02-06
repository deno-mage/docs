import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const SIMPLE_ROUTING = `app.get("/books", (context) => {
  context.json(StatusCode.OK, [{ title: "Book 1" }, { title: "Book 2" }]);
});

app.post("/books", (context) => {
  context.text(StatusCode.OK, "Created book!");
});`;

const PARAMETER_ROUTING = `app.get("/user/:id", (context) => {
  context.text(StatusCode.OK, \`User ID: \${context.params.id}\`);
});

app.get("/user/:id/post/:postId", (context) => {
  context.text(
    StatusCode.OK,
    \`User ID: \${context.params.id}, Post ID: \${context.params.postId}\`,
  );
});`;

const WILDCARD_ROUTING = `app.get("/public/*", (context) => {
  context.text(StatusCode.OK, \`Wildcard path: \${context.wildcard}\`);
});`;

const WILDCARD_PATHS = `/public/
/public/index.html
/public/css/style.css`;

export const RoutingPage = () => {
  return (
    <Page description="Learn about Mage routing" title="Routing">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/routing" isCurrent>
            Routing
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Routing</Heading>
        <Text size="lg" as="p">
          Mage has simple and familiar routing for HTTP requests.
        </Text>
        <Heading level={2}>Basics</Heading>
        <Text as="p">
          You route requests to handlers by registering middleware against HTTP
          methods and paths using methods like <Text as="code">app.get()</Text>,
          {" "}
          <Text as="code">app.post()</Text>, and others.
        </Text>
        <CodeBlock>{SIMPLE_ROUTING}</CodeBlock>

        <Heading level={2}>Parameters</Heading>
        <Text as="p">
          You can use parameters in your routes by using a colon followed by the
          parameter name in the path part like{" "}
          <Text as="code">/user/:id</Text>. These parameters are available in
          the <Text as="code">context.params</Text> object.
        </Text>
        <CodeBlock>{PARAMETER_ROUTING}</CodeBlock>

        <Heading level={2}>Wildcards</Heading>
        <Text as="p">
          Paths can contain wildcards that will match any path. Wildcards must
          be at the end of the path. The path portion captured by the wildcard
          is available on <Text as="code">context.wildcard</Text>.
        </Text>
        <CodeBlock>{WILDCARD_ROUTING}</CodeBlock>
        <Text as="p">
          Wildcards are inclusive of the path its placed on. This means that the
          wildcard will match any path that starts with the wildcards preceding
          path.
        </Text>
        <Text as="p">
          This means the following paths will match the wildcard path{" "}
          <Text as="code">/public/*</Text>:
        </Text>
        <CodeBlock>{WILDCARD_PATHS}</CodeBlock>
      </div>
    </Page>
  );
};
