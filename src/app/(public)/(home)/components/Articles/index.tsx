"use client";

import Card from "@/components/Card";
import Section from "@/components/Section";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { articles } from "./constants";

function Articles() {
	const router = useRouter();

	return (
		<Section tag="Blog Co-criar">
			<div className="flex flex-wrap justify-center gap-8">
				{articles.slice(0, 3).map((article) => (
					<Card
						{...article}
						key={article.slug}
						onClick={() =>
							router.push(ROUTES_PATHS.ARTICLE.replace(":id", article.slug))
						}
						className="cursor-pointer"
					/>
				))}
			</div>
			<Link
				href="/artigos"
				className="flex items-center gap-0.5 mt-8 ml-auto w-fit font-bold text-blue-950 text-lg"
			>
				Ver mais artigos
				<Icon icon="material-symbols:arrow-right-alt-rounded" />
			</Link>
		</Section>
	);
}

export default Articles;
