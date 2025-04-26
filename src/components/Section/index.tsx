import type { ComponentProps } from "react";

type SectionProps = {
	tag?: string;
} & ComponentProps<"section">;

function Section({ tag, children, className, ...rest }: SectionProps) {
	return (
		<section {...rest} className={`${className}`}>
			<div className="flex flex-col mx-auto p-12 lg:px-28 max-w-[81rem]">
				{tag && (
					<h4 className="bg-purple-50 mb-8 p-2 rounded-lg w-fit font-inter font-medium text-purple-900 text-sm uppercase">
						{tag}
					</h4>
				)}
				{children}
			</div>
		</section>
	);
}

export default Section;
