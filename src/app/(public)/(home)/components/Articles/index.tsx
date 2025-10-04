"use client";

import { getArticles } from "@/api/requests/articles/get-articles";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Articles() {
	const router = useRouter();

	const { data, isFetching } = useQuery({
		queryKey: ["articles", 3],
		queryFn: () => getArticles({ limit: 3 }),
	});

	const cards = data?.articles || [];

	return (
		<Section tag="Blog Co-criar">
			<div className="flex flex-wrap justify-center gap-8">
				{cards.map((card) => (
					<Card
						title={card.title}
						image={card.image_url}
						tag={card.category}
						content={`${card.content.slice(0, 200)}...`}
						key={card.id}
						onClick={() =>
							router.push(ROUTES_PATHS.ARTICLE.replace(":id", card.id))
						}
						loading={isFetching}
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
