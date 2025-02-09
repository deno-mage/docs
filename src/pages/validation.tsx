import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { Link } from "../components/link.tsx";
import { List, ListItem } from "../components/list.tsx";

const VALIDATING = `const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

app.post("/users", useValidate("json", userSchema), async (context) => {
  context.text(StatusCode.OK, "Valid!");
})`;

const ACCESSING_VALID_DATA = `const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

app.post("/users", useValidate("json", userSchema), async (context) => {
  const newUser = context.valid("json", userSchema)
  await db.users.insert(newUser);

  context.text(StatusCode.OK, "User created!");
})`;

export const ValidationPage = () => {
  return (
    <Page description="Learn about Mage" title="Validation">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/access-the-request" isCurrent>
            Validation
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Validation</Heading>
        <Text as="p" size="lg">
          Mage provides middleware to let you validate requests. It has first
          party support for{" "}
          <Link
            href="https://standardschema.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Standard Schema
          </Link>{" "}
          compliant libraries like{" "}
          <Link
            href="https://zod.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            zod
          </Link>
          .
        </Text>

        <Heading level={2}>Validating requests</Heading>
        <Text as="p">
          Mage provides a middleware you can use to validate the contents of a
          request,{" "}
          <Text as="code">useValidate()</Text>. It will validate the request and
          respond with a 400 status code if the request is invalid.
        </Text>
        <CodeBlock>{VALIDATING}</CodeBlock>

        <Heading level={3}>Supported sources for data</Heading>
        <Text as="p">
          The middleware supports the following sources for data:
        </Text>
        <List>
          <ListItem>
            <Text bold>json</Text> -{" "}
            <Text as="code">context.request.json()</Text>
          </ListItem>
          <ListItem>
            <Text bold>form</Text> -{" "}
            <Text as="code">context.request.formData()</Text>
          </ListItem>
          <ListItem>
            <Text bold>params</Text> - <Text as="code">context.params</Text>
          </ListItem>
          <ListItem>
            <Text bold>search-params</Text> -{" "}
            <Text as="code">context.request.url.searchParams</Text>
          </ListItem>
        </List>

        <Heading level={2}>Accessing validated data</Heading>
        <Text as="p">
          Once validated successfully the data will be available on the context
          via the
          <Text as="code">context.valid()</Text>{" "}
          method. You provide the source and schema you provided to the
          middleware and will return the data.
        </Text>
        <CodeBlock>{ACCESSING_VALID_DATA}</CodeBlock>
      </div>
    </Page>
  );
};
