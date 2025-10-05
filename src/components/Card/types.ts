import type { ComponentPropsWithoutRef, ElementType } from "react";

export type TCard = {
	image: string;
	tag: string;
	title: string;
	content: string;
};

export type CardProps<T extends ElementType> = {
	as?: T;
	loading?: boolean;
} & ComponentPropsWithoutRef<T> &
	TCard;
