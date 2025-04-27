export type TColors = {
	detach: string;
	border: string;
	icon: string;
};

export type TSolutionsItem = {
	icon: string;
	title: string;
	content: string;
	detach: boolean;
};

export type TSolutionsSection = {
	id: string;
	name: string;
	items: TSolutionsItem[];
	colors?: TColors;
};
