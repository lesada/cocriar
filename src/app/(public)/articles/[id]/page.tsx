"use client";

import { getArticleById } from "@/api/requests/articles/get-article-by-id";
import { getArticles } from "@/api/requests/articles/get-articles";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

function Article() {
	const router = useRouter();

	const { id } = useParams<{ id: string }>();

	const { data, isFetching } = useQuery({
		queryKey: ["article", id],
		queryFn: () => getArticleById({ id }),
	});

	const { data: allArticles, isFetching: fetchingAllArticles } = useQuery({
		queryKey: ["articles", 3],
		queryFn: () => getArticles({ limit: 3 }),
	});

	const article = data?.article;
	const cards = allArticles?.articles || [];

	return (
		<main>
			{article?.image_url && (
				<div className="w-full">
					<Image
						src={article?.image_url}
						alt=""
						width={1440}
						height={589}
						className="w-full h-[31.25rem]"
					/>
				</div>
			)}
			<Section tag="Quem somos?">
				<div className="flex flex-col gap-12">
					<div>
						<h1 className="title">{article?.title}</h1>
						<hr className="detach-hr" />
					</div>
					<h2 className="font-poppins font-semibold text-2xl leading-relaxed">
						{article?.title}
					</h2>
					<div className="flex flex-col gap-8">
						<p className="font-inter text-neutral-700 text-lg">
							{article?.content}
						</p>
					</div>
				</div>
			</Section>
			<Section tag="postados recentemente">
				<div className="flex flex-wrap justify-center gap-8">
					{cards.map((card) => {
						return (
							<Card
								image={card.image_url}
								content={card.content}
								tag={card.category}
								title={card.title}
								key={card.id}
								onClick={() =>
									router.push(ROUTES_PATHS.ARTICLE.replace(":id", card.id))
								}
								loading={fetchingAllArticles}
							/>
						);
					})}
				</div>
				<Link
					href="/artigos"
					className="flex items-center gap-0.5 mt-8 ml-auto w-fit font-bold text-blue-950 text-lg"
				>
					Ver mais artigos
					<Icon icon="material-symbols:arrow-right-alt-rounded" />
				</Link>
			</Section>
		</main>
	);
}

export default Article;
