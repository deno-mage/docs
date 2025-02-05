interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | "hero";
  children: string;
}

export const Heading = (props: HeadingProps) => {
  switch (props.level) {
    case "hero":
      return (
        <h1 className="text-5xl font-bold max-w-prose">{props.children}</h1>
      );
    case 1:
    default:
      return (
        <h1 className="text-4xl font-bold max-w-prose">{props.children}</h1>
      );
    case 2:
      return (
        <h2 className="text-2xl font-bold max-w-prose">{props.children}</h2>
      );
    case 3:
      return <h3 className="text-xl font-bold max-w-prose">{props.children}
      </h3>;
    case 4:
      return <h4 className="text-lg font-bold max-w-prose">{props.children}
      </h4>;
    case 5:
      return (
        <h5 className="text-base font-bold max-w-prose" font-bold>
          {props.children}
        </h5>
      );
  }
};
