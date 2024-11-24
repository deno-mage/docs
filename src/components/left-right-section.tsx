import { ComponentChildren } from "preact";

interface LeftRightSectionProps {
  children: ComponentChildren;
}

export const LeftRightSection = (props: LeftRightSectionProps) => {
  return (
    <div className="lg:flex lg:flex-row max-w-full gap-8 justify-center items-center">
      {props.children}
    </div>
  );
};

interface InnerLeftSectionProps {
  children: ComponentChildren;
}

export const InnerLeftSection = (props: InnerLeftSectionProps) => {
  return <div className={`pb-8 lg:pb-0 w-full lg:w-1/2`}>{props.children}</div>;
};

interface InnerLRightSectionProps {
  children: ComponentChildren;
}

export const InnerRightSection = (props: InnerLRightSectionProps) => {
  return <div className={`w-full lg:w-1/2`}>{props.children}</div>;
};
