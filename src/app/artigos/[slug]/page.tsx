"use client";

import hero from "@/assets/hero-about.png";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cards } from "../constants";

function Article() {
	const { slug } = useParams();

	const article = cards.find((card) => card.slug === slug);

	return (
		<main>
			<div className="w-full">
				<Image
					src={hero}
					alt=""
					width={1440}
					height={589}
					className="w-full h-[31.25rem]"
				/>
			</div>
			<Section tag="Quem somos?">
				<div className="flex flex-col gap-12">
					<div>
						<h1 className="title">{article?.title}</h1>
						<hr className="detach-hr" />
					</div>
					<h2 className="font-poppins font-semibold text-2xl leading-relaxed">
						Lorem ipsum sit porttitor erat tortor curabitur aliquam varius nisi,
						vehicula nisi nullam molestie mollis ante eros ornare metusL
					</h2>
					<div className="flex flex-col gap-8">
						<p className="font-inter text-neutral-700 text-lg">
							{article?.text}
						</p>
					</div>
				</div>
			</Section>
			<Section tag="postados recentemente">
				<div className="flex flex-wrap justify-center gap-8">
					{cards.slice(0, 3).map((card) => {
						return (
							<Card
								image={card.image}
								subtitle={card.text}
								tag={card.tag}
								title={card.title}
								key={card.slug}
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
