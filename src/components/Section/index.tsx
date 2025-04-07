import { ComponentProps } from "react";

type SectionProps = {
  tag?: string;
} & ComponentProps<"section">;

function Section({ tag, children, ...rest }: SectionProps) {
  return (
    <section {...rest} className="flex flex-col px-28 py-12">
      <h4 className="uppercase font-inter text-sm text-purple-900 bg-purple-50 rounded-lg p-2 w-fit font-medium mb-8">
        {tag}
      </h4>
      {children}
    </section>
  );
}

export default Section;
