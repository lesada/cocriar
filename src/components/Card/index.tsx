import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { TCard } from "./types";

export type CardProps<T extends ElementType> = {
	as?: T;
} & ComponentPropsWithoutRef<T> &
	TCard;

function Card<T extends ElementType = "button">({
	as,
	image,
	subtitle,
	tag,
	title,
	children,
	className,
	...rest
}: CardProps<T>) {
	const Component = as ?? "button";

	return (
		<Component
			className={`bg-neutral-0 shadow-lg p-4 flex flex-col gap-4 shrink-0 w-80 rounded text-left ${className}`}
			{...rest}
		>
			<div className="w-full h-48">
				<img src={image} alt="" className="w-full h-full object-cover" />
			</div>
			<span className="tag">{tag}</span>
			<h4 className="font-poppins font-semibold text-neutral-800 text-xl">
				{title}
			</h4>
			<p className="font-inter text-neutral-700 text-lg text-ellipsis line-clamp-3 leading-relaxed">
				{subtitle}
			</p>
			{children}
		</Component>
	);
}

export default Card;
