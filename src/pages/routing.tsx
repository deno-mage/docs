import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const BASIC_PATHS = `app.get("/users", ...);

app.post("/users", ...);

app.put("/users/123", ...);

app.delete("/users/123", ...);

app.put("/users/123", ...);

app.patch("/users/123", ...);

app.all("/users", ...);`;

const PATH_PARAMETERS = `app.get("/users/:id", async (c) => {
  const user = await getUserById(c.req.params.id);

  c.json(user);
});`;

const MULTI_PATH_PARAMETERS =
  `app.get("/users/:userId/posts/:postId", async (c) => {
  const post = await getPostById(
    c.req.params.userId,
    c.req.params.postId
  );

  c.json(post);
});`;

const WILDCARDS = `app.get("/public/*", async (c) => {
  const filepath = Deno.cwd("./public", c.req.wildcard);

  await c.file(file);
});`;

export const RoutingPage = () => {
  return (
    <Page description="Getting started with Mage" title="Routing">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/routing" isCurrent>
            Routing
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Routing</Heading>
        <Text as="p" size="lg">
          Mage has a simple mechanism for routing requests to the appropriate
          handler.
        </Text>

        <Heading level={2}>Basic paths</Heading>
        <Text as="p">
          You register handlers against HTTP methods and paths on the Mage app
          instance.
        </Text>
        <CodeBlock>{BASIC_PATHS}</CodeBlock>

        <Heading level={2}>Path parameters</Heading>
        <Text as="p">
          You can define path parameters that are then available on contexts
          request object.
        </Text>
        <CodeBlock>{PATH_PARAMETERS}</CodeBlock>
        <Text as="p">
          You can capture as many as you like in a single path.
        </Text>
        <CodeBlock>{MULTI_PATH_PARAMETERS}</CodeBlock>

        <Heading level={2}>Wildcards</Heading>
        <Text as="p">
          You can capture multiple paths with a single entry using a wildcard.
          The captured wildcard will be available on the contexts request
          object.
        </Text>
        <CodeBlock>{WILDCARDS}</CodeBlock>
      </div>
    </Page>
  );
};
