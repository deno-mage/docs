import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const HANDLE_REQUESTS = `app.get("/hello", async (c) => {
  c.text("Hello, world!");
});

app.get("/goodbye", async (c) => {
  c.text("Goodbye, world!");
});`;

const MIDDLEWARE_CHAIN = `a() -> b() -> handler() -> b.. -> a..`;

const GLOBAL_MIDDLEWARE = `app.use(async (c, next) => {
  await next()
});`;

const ROUTE_MIDDLEWARE = `app.get(
  "/", 
  async (c, next) => {
    await next();
  },
  (c) => {
    c.text("Hello, world!");
  },
);`;

export const BasicsPage = () => {
  return (
    <Page description="Getting started with Mage" title="Basics">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/basics" isCurrent>
            Basics
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Basics</Heading>
        <Text as="p" size="lg">
          Mage aims to have a simple and familiar API.
        </Text>

        <Heading level={2}>Handling a request</Heading>
        <Text as="p">
          At its simplest Mage apps are handler functions mapped against routes.
        </Text>
        <CodeBlock>{HANDLE_REQUESTS}</CodeBlock>

        <Heading level={2}>Middleware</Heading>
        <Text as="p">
          Middleware are the heart of Mage apps. You chain middleware together
          to handle requests and send back responses.
        </Text>

        <Heading level={3}>Chaining</Heading>
        <Text as="p">
          The power of middleware comes when you start chaining them together.
          Middleware are chained together in the order they are registered. A
          request will make its way down through the chain and back up again and
          the final response registered on the context will be sent back to the
          client.
        </Text>
        <CodeBlock>{MIDDLEWARE_CHAIN}</CodeBlock>

        <Heading level={3}>Registering</Heading>
        <Text as="p">Register middleware globally to apply to all routes.</Text>
        <CodeBlock>{GLOBAL_MIDDLEWARE}</CodeBlock>

        <Text as="p">
          Register middleware to specific routes to apply only to those routes.
        </Text>
        <CodeBlock>{ROUTE_MIDDLEWARE}</CodeBlock>
      </div>
    </Page>
  );
};
