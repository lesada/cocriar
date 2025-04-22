import Button from "@/components/Button";
import Section from "@/components/Section";
import { cards, categories } from "./constants";

function Blog() {
	return (
		<main>
			<Section>
				<h1 className="title text-center mb-6">Blog</h1>
				<div className="flex flex-col lg:flex-row gap-12">
					<div className="flex flex-col gap-4">
						{cards.map((card) => {
							return (
								<article
									className="p-4 shadow-xl rounded-lg flex flex-col md:flex-row gap-6 bg-neutral-0"
									key={card.title}
								>
									<div className="w-full max-w-80 h-full shrink-0">
										<img
											src={card.image}
											alt=""
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="flex flex-col gap-4">
										<span className="tag">{card.tag}</span>
										<h2 className="font-poppins text-2xl font-semibold">
											{card.title}
										</h2>
										<p className="font-inter text-base text-neutral-700">
											{card.text}
										</p>
									</div>
								</article>
							);
						})}
						<Button
							variant="primary"
							outlined
							className="mx-auto rounded-lg mt-4"
							type="button"
						>
							Carregar mais artigos
						</Button>
					</div>

					<div className="flex flex-col gap-4 min-w-28 shrink-0">
						<p className="text-blue-800 font-bold font-inter text-2xl">
							Categorias
						</p>

						<ul className="flex flex-col gap-4">
							{categories.map((category) => {
								return (
									<li
										className="text-neutral-900 font-inter text-base"
										key={category}
									>
										{category}
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

export default Blog;
