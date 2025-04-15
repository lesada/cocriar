import type { ComponentProps } from "react";

type SectionProps = {
  tag?: string;
} & ComponentProps<"section">;

function Section({ tag, children, className, ...rest }: SectionProps) {
  return (
    <section {...rest} className={`flex flex-col p-12 lg:px-28  ${className}`}>
      <h4 className="uppercase font-inter text-sm text-purple-900 bg-purple-50 rounded-lg p-2 w-fit font-medium mb-8">
        {tag}
      </h4>
      {children}
    </section>
  );
}

export default Section;
