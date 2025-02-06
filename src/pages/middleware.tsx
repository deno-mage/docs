import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const SIMPLE_MIDDLEWARE = `app.get("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});

app.get("/async", async (context) => {
  await context.render(StatusCode.OK, <h1>Hello, World!</h1>);
});`;

const CHAINING_MIDDLEWARE = `// Log the request
app.use((context, next) => {
  console.log(context.request.method, context.request.url);
  next();
});

// Set the response header and call the next middleware
app.use((context, next) => {
  context.response.headers.set("X-Request-Id", "123");
  next();
});

// Set the response body and end the request
app.get((context) => {
  context.text(StatusCode.OK, "Hello, World!");
});`;

const USE_REGISTRATION_MIDDLEWARE = `app.use((context, next) => {
  next();
});`;

const VERB_REGISTRATION_MIDDLEWARE = `app.get("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});

app.post("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});`;

const MULTI_USE_REGISTRATION_MIDDLEWARE = `app.use(
  (context, next) => {
    console.log("First middleware");
    next();
  },
  (context, next) => {
    console.log("Second middleware");
    next();
  },
);`;

export const MiddlewarePage = () => {
  return (
    <Page description="Learn about Mage middleware" title="Middleware">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/middleware" isCurrent>
            Middleware
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Middleware</Heading>
        <Text size="lg" as="p">
          Mage apps are composed of stacked middleware. Every request is handled
          by each middleware in the order they are added.
        </Text>

        <Heading level={2}>Basics</Heading>
        <Text as="p">
          A simple middleware that sets a response looks like this. They can be
          sync or async.
        </Text>
        <CodeBlock>{SIMPLE_MIDDLEWARE}</CodeBlock>
        <Text as="p">
          A context object is passed to each middleware. The context contains
          information about the request and response along with utility methods
          to handle the request.
        </Text>

        <Heading level={2}>Chaining</Heading>
        <Text as="p">
          A request is handled by each middleware in the order they are added.
          It travels down the middleware stack and back up as each middleware
          calls the next via the <Text as="code">next()</Text> function.
        </Text>
        <Text as="p">The following example shows this pattern in action.</Text>
        <CodeBlock>{CHAINING_MIDDLEWARE}</CodeBlock>

        <Heading level={2}>Registration</Heading>
        <Text as="p">
          You register middleware to run on every request using the{" "}
          <Text as="code">app.use()</Text> method.
        </Text>
        <CodeBlock>{USE_REGISTRATION_MIDDLEWARE}</CodeBlock>
        <Text as="p">
          You can also register middleware to run on specific routes using the
          HTTP verb methods like <Text as="code">app.get()</Text> and{" "}
          <Text as="code">app.post()</Text>.
        </Text>
        <CodeBlock>{VERB_REGISTRATION_MIDDLEWARE}</CodeBlock>
        <Text as="p">
          You can register multiple middleware functions at once. These are
          executed in order.
        </Text>
        <CodeBlock>{MULTI_USE_REGISTRATION_MIDDLEWARE}</CodeBlock>
      </div>
    </Page>
  );
};
