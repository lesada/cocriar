"use client";

import { getArticles } from "@/api/requests/articles/get-articles";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ShimmerSkeleton from "@/components/ShimmerSkeleton";
import { ROUTES_PATHS } from "@/routes";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function FetchingArticle() {
	return (
		<>
			<div className="flex md:flex-row flex-col gap-6 bg-neutral-0 shadow-xl p-4 rounded-lg text-left cursor-pointer">
				<ShimmerSkeleton className="rounded-lg w-full max-w-80 h-full shrink-0" />
				<div className="flex flex-col gap-4 w-full">
					<ShimmerSkeleton className="rounded-lg w-full h-6" />
					<ShimmerSkeleton className="rounded-lg w-full h-8" />
					<ShimmerSkeleton className="rounded-lg w-full h-16" />
				</div>
			</div>
		</>
	);
}

function Articles() {
	const [selectedCategory, setSelectedCategory] = useQueryState("category");
	const [limit, setLimit] = useState(10);
	const { push } = useRouter();

	const { data, isFetching } = useQuery({
		queryKey: ["articles", selectedCategory, limit],
		queryFn: () => getArticles({ category: selectedCategory, limit }),
	});

	console.log("data", data);

	const cards = data?.articles || [];
	const categoryList = Array.from(new Set(cards.map((card) => card.category)));

	return (
		<main>
			<Section>
				<h1 className="mb-6 text-center title">Blog</h1>
				<div className="flex lg:flex-row flex-col gap-12">
					<div className="flex flex-col flex-1 gap-4">
						{isFetching ? (
							<>
								<FetchingArticle />
								<FetchingArticle />
								<FetchingArticle />
							</>
						) : (
							cards
								.filter((card) =>
									selectedCategory ? card.category === selectedCategory : card,
								)
								.map((card) => {
									return (
										<button
											className="flex md:flex-row flex-col gap-6 bg-neutral-0 shadow-xl p-4 rounded-lg text-left cursor-pointer"
											key={card.id}
											onClick={() =>
												push(ROUTES_PATHS.ARTICLE.replace(":id", card.id))
											}
											type="button"
										>
											{!!card.image_url && (
												<div className="w-full max-w-80 h-full shrink-0">
													<img
														src={card.image_url}
														alt=""
														className="w-full h-full object-cover"
													/>
												</div>
											)}
											<div className="flex flex-col gap-4">
												<span className="tag">{card.category}</span>
												<h2 className="font-poppins font-semibold text-2xl">
													{card.title}
												</h2>
												<p className="font-inter text-neutral-700 text-base">
													{card.content}
												</p>
											</div>
										</button>
									);
								})
						)}
						<Button
							variant="primary"
							outlined
							className="mx-auto mt-4 rounded-lg"
							type="button"
							onClick={() => setLimit((prev) => prev + 10)}
						>
							Carregar mais artigos
						</Button>
					</div>

					<div className="flex flex-col gap-4 min-w-28 shrink-0">
						<p className="font-inter font-bold text-blue-800 text-2xl">
							Categorias
						</p>

						<ul className="flex flex-col gap-4">
							{categoryList.map((category) => {
								return (
									<li key={category}>
										<button
											type="button"
											className={twMerge(
												clsx(
													"font-inter text-neutral-900 text-base cursor-pointer",
													{
														"font-semibold": selectedCategory === category,
													},
												),
											)}
											onClick={() => {
												if (selectedCategory === category) {
													setSelectedCategory("");
													return;
												}
												setSelectedCategory(category);
											}}
										>
											{category}
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Section>
		</main>
	);
}

export default Articles;
