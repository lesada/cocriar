import clsx from "clsx";
import { DynamicIcon } from "lucide-react/dynamic";
import { twMerge } from "tailwind-merge";
import type { TColors, TSolutionsItem } from "./types";

type CardProps = {
	colors?: TColors;
} & TSolutionsItem;

function Card({ title, content, detach, icon, colors }: CardProps) {
	return (
		<div
			className={twMerge(
				clsx(
					"rounded-lg basis-xs border-2 px-4 py-6 flex flex-col gap-4 min-h-72 border-purple-300",
					detach && "bg-purple-900",
					detach && colors?.detach && colors.detach,
					colors?.border && colors.border,
				),
			)}
		>
			<div
				className={twMerge(
					clsx(
						"w-10 h-10 p-2 bg-purple-800 rounded-lg",
						colors?.icon && colors.icon,
					),
				)}
			>
				<DynamicIcon name={icon} className="w-max h-max text-neutral-50" />
			</div>
			<h6
				className={twMerge(
					clsx(
						"font-semibold font-inter h-11 text-neutral-700 text-lg",
						detach && "text-neutral-50",
					),
				)}
			>
				{title}
			</h6>
			<p
				className={twMerge(
					clsx("text-neutral-500 font-inter leading-relaxed text-base", {
						"text-neutral-50": detach,
					}),
				)}
			>
				{content}
			</p>
		</div>
	);
}

export default Card;
