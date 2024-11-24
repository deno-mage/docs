import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Link } from "../components/link.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import {
  InnerLeftSection,
  InnerRightSection,
  LeftRightSection,
} from "../components/left-right-section.tsx";

export const IndexPage = () => {
  return (
    <Page description="Build web applications with Deno and Preact">
      <div className="flex flex-col gap-8">
        <BreadcrumbList>
          <Breadcrumb href="/" isCurrent>
            Home
          </Breadcrumb>
        </BreadcrumbList>
        <LeftRightSection>
          <InnerLeftSection>
            <div className="text-center lg:text-right">
              <Heading level={1}>Mage</Heading>
              <p className="text-lg">
                Build web applications with{" "}
                <Link href="https://deno.com">Deno</Link>
                {" and "}
                <Link href="https://preactjs.com">Preact</Link>
              </p>
            </div>
          </InnerLeftSection>
          <InnerRightSection>
            <CodeBlock>
              {`import { MageApp, StatusCode } from "@mage/server";

const app = new MageApp();

app.get("/", (context) => {
  context.render(StatusCode.OK, <h1>Hello, World!</h1>);
});

app.post("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});

Deno.serve(app.build());`}
            </CodeBlock>
          </InnerRightSection>
        </LeftRightSection>
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href="/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link href="/middleware">Middleware</Link>
          </li>
          <li>
            <Link href="/routing">Routing</Link>
          </li>
        </ul>
      </div>
    </Page>
  );
};
