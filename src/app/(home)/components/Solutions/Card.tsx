import { Icon } from "@iconify/react";
import clsx from "clsx";
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
					"flex flex-col gap-4 px-4 py-6 border-2 border-purple-300 rounded-lg max-w-3xs min-h-72 basis-xs",
					detach && "bg-purple-900",
					detach && colors?.detach && colors.detach,
					colors?.border && colors.border,
				),
			)}
		>
			<div
				className={twMerge(
					clsx(
						"flex flex-col justify-center items-center bg-purple-800 p-2 rounded-lg w-10 h-10",
						colors?.icon && colors.icon,
					),
				)}
			>
				<Icon
					icon={icon}
					className="w-max h-max text-neutral-50"
					width={30}
					height={30}
				/>
			</div>
			<h6
				className={twMerge(
					clsx(
						"font-inter font-semibold text-neutral-700 text-lg",
						detach && "text-neutral-50",
					),
				)}
			>
				{title}
			</h6>
			<p
				className={twMerge(
					clsx("font-inter text-neutral-500 text-base leading-relaxed", {
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
