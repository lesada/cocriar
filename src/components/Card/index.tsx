import DOMPurify from "isomorphic-dompurify";
import type { ElementType } from "react";
import ShimmerSkeleton from "../ShimmerSkeleton";
import type { CardProps } from "./types";

function getDescription(html: string, maxLength = 100) {
	const clean = DOMPurify.sanitize(html);
	const doc = new DOMParser().parseFromString(clean, "text/html");
	const text = doc.body.textContent || "";
	return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function Card<T extends ElementType = "button">({
	as,
	image,
	content,
	tag,
	title,
	children,
	className,
	loading = false,
	...rest
}: CardProps<T>) {
	const Component = as ?? "button";

	const description = getDescription(content);

	if (loading) {
		return (
			<div
				className={`bg-neutral-0 shadow-lg p-4 flex flex-col gap-4 shrink-0 w-80 rounded text-left  ${className}`}
			>
				<div className="w-full h-48">
					<ShimmerSkeleton className="w-full h-full object-cover" />
				</div>
				<ShimmerSkeleton className="rounded w-20 h-6" />
				<ShimmerSkeleton className="rounded w-3/4 h-8" />
				<ShimmerSkeleton className="rounded w-full h-16" />
				{children && <ShimmerSkeleton className="mt-auto rounded w-1/2 h-6" />}
			</div>
		);
	}

	const clean = DOMPurify.sanitize(description);

	return (
		<Component
			className={`bg-neutral-0 shadow-lg p-4 flex flex-col gap-4 shrink-0 w-80 rounded text-left cursor-pointer ${className}`}
			{...rest}
		>
			{image && (
				<div className="w-full h-48">
					<img src={image} alt="" className="w-full h-full object-cover" />
				</div>
			)}
			<span className="tag">{tag}</span>
			<h4 className="font-poppins font-semibold text-neutral-800 text-xl">
				{title}
			</h4>
			<div
				className="font-inter text-neutral-700 text-lg text-ellipsis line-clamp-3 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: clean }}
			/>
			{children}
		</Component>
	);
}

export default Card;
