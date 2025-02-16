import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const GET = `import { getCookie } from "@mage/app/cookies";

const cookie = getCookie(c, "name");`;

const SET = `import { setCookie } from "@mage/app/cookies";

setCookie(c, "name", "value", { secure: true, httpOnly: true });`;

const DELETE = `import { deleteCookie } from "@mage/app/cookies";

deleteCookie(c, "name");`;

export const CookiesPage = () => {
  return (
    <Page description="Getting started with Mage" title="Cookies">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cookies" isCurrent>
            Cookies
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Cookies</Heading>
        <Text as="p" size="lg">
          Manage cookies via Mage's cookie utility functions.
        </Text>

        <Heading level={2}>GET</Heading>
        <Text as="p">Get a cookie from the request.</Text>
        <CodeBlock>{GET}</CodeBlock>

        <Heading level={2}>SET</Heading>
        <Text as="p">Set a cookie in the response.</Text>
        <CodeBlock>{SET}</CodeBlock>

        <Heading level={2}>DELETE</Heading>
        <Text as="p">Delete a cookie from the response.</Text>
        <CodeBlock>{DELETE}</CodeBlock>
      </div>
    </Page>
  );
};
