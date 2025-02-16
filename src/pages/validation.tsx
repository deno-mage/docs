import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { Link } from "../components/link.tsx";

const VALIDATE_REQUEST_DATA = `import { useValidate } from "@mage/app/validate";
import { z } from "zod";

const personSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});


app.post("/form", useValidate("form", personSchema), (c) => {
  c.text("Valid!");
});`;

const READ_VALID_DATA = `import { useValidate } from "@mage/app/validate";
import { z } from "zod";

const personSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

type Person = z.infer<typeof personSchema>;

app.post("/form", useValidate("form", personSchema), (c) => {
  c.json(c.req.valid<Person>("form"));
});`;

export const ValidationPage = () => {
  return (
    <Page description="Getting started with Mage" title="Validation">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/validation" isCurrent>
            Validation
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Validation</Heading>
        <Text as="p" size="lg">
          Mage has built-in support for validating request data using libraries
          compatible with{" "}
          <Link
            href="https://standardschema.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Standard Schema
          </Link>
          .
        </Text>

        <Heading level={2}>Validating request data</Heading>
        <Text as="p">
          You can register a middleware to validate parts of the request data.
          This example uses{" "}
          <Link
            href="https://zod.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Zod
          </Link>{" "}
          to validate the requests form data.
        </Text>
        <CodeBlock>{VALIDATE_REQUEST_DATA}</CodeBlock>
        <Text as="p">
          Supported request data to validate includes;{" "}
          <Text as="code">json</Text>, <Text as="code">form</Text>,{" "}
          <Text as="code">params</Text>, <Text as="code">search-params</Text>.
        </Text>

        <Heading level={2}>Reading validated data</Heading>
        <Text as="p">
          You can access validated data from the contexts request object.
        </Text>
        <CodeBlock>{READ_VALID_DATA}</CodeBlock>
      </div>
    </Page>
  );
};
