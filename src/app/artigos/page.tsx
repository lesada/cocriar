"use client";

import Button from "@/components/Button";
import Section from "@/components/Section";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { twMerge } from "tailwind-merge";
import { cards, categories } from "./constants";

function Artigos() {
	const [selectedCategory, setSelectedCategory] = useQueryState("category");
	const { push } = useRouter();

	return (
		<main>
			<Section>
				<h1 className="mb-6 text-center title">Blog</h1>
				<div className="flex lg:flex-row flex-col gap-12">
					<div className="flex flex-col gap-4">
						{cards.map((card) => {
							return (
								<button
									className="flex md:flex-row flex-col gap-6 bg-neutral-0 shadow-xl p-4 rounded-lg text-left cursor-pointer"
									key={card.slug}
									onClick={() => push(`/artigos/${card.slug}`)}
									type="button"
								>
									<div className="w-full max-w-80 h-full shrink-0">
										<img
											src={card.image}
											alt=""
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="flex flex-col gap-4">
										<span className="tag">{card.tag}</span>
										<h2 className="font-poppins font-semibold text-2xl">
											{card.title}
										</h2>
										<p className="font-inter text-neutral-700 text-base">
											{card.text}
										</p>
									</div>
								</button>
							);
						})}
						<Button
							variant="primary"
							outlined
							className="mx-auto mt-4 rounded-lg"
							type="button"
						>
							Carregar mais artigos
						</Button>
					</div>

					<div className="flex flex-col gap-4 min-w-28 shrink-0">
						<p className="font-inter font-bold text-blue-800 text-2xl">
							Categorias
						</p>

						<ul className="flex flex-col gap-4">
							{categories.map((category) => {
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

export default Artigos;
