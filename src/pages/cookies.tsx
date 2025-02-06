import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const GET_COOKIE = `app.use((context) => {
  console.log(context.cookies.get("name"));
});`;

const SET_COOKIES = `app.use((context) => {
  context.cookies.set("name", "value");
});`;

const DELETE_COOKIES = `app.use((context) => {
  context.cookies.delete("name");
});`;

export const CookiesPage = () => {
  return (
    <Page description="Learn about Mage context" title="Context">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cookies" isCurrent>
            Cookies
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Cookies</Heading>
        <Text as="p">
          A cookie store is available at on the context passed into middleware.
        </Text>

        <Heading level={3}>Get</Heading>
        <Text as="p">
          Read cookies via <Text as="code">context.cookies.get()</Text>.
        </Text>
        <CodeBlock>{GET_COOKIE}</CodeBlock>

        <Heading level={3}>Set</Heading>
        <Text as="p">
          Edit cookies via <Text as="code">context.cookies.set()</Text>.
        </Text>
        <CodeBlock>{SET_COOKIES}</CodeBlock>

        <Heading level={3}>Delete</Heading>
        <Text as="p">
          Delete cookies via <Text as="code">context.cookies.delete()</Text>.
        </Text>
        <CodeBlock>{DELETE_COOKIES}</CodeBlock>
      </div>
    </Page>
  );
};
