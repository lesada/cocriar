import Section from "@/components/Section";
import { Fragment } from "react";
import Card from "./Card";
import { solutions } from "./constants";

function Solutions() {
	return (
		<Section tag="Soluções co-criar">
			<h3 className="title">Soluções para você e a sua empresa</h3>
			<p className="text mb-12">
				Os serviços estão disponíveis em formato presencial e em ambientes
				virtuais (on-line e ao vivo). Sinta-se à vontade para nos contatar e
				obter as informações necessárias para seguir em desenvolvimento conosco.
			</p>
			<div>
				{solutions.map((solution) => {
					return (
						<Fragment key={solution.name}>
							<h5 className="font-poppins text-2xl font-semibold leading-relaxed mb-6">
								{solution.name}
							</h5>
							<div className="flex items-stretch gap-4 flex-wrap justify-between mb-12">
								{solution.items.map((card) => (
									<Card
										key={card.title}
										content={card.content}
										detach={card.detach}
										title={card.title}
										icon={card.icon}
										colors={solution.colors}
									/>
								))}
							</div>
						</Fragment>
					);
				})}
			</div>
		</Section>
	);
}

export default Solutions;
