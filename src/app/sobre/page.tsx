import hero from "@/assets/hero-about.png";
import owner from "@/assets/owner.png";
import Section from "@/components/Section";
import Image from "next/image";

function Sobre() {
	return (
		<main>
			<div className="w-full">
				<Image src={hero} alt="" width={1440} height={589} />
			</div>
			<Section tag="Quem somos?">
				<div className="flex flex-col gap-12">
					<div>
						<h1 className="title">A Co-criar</h1>
						<hr className="detach-hr" />
					</div>
					<h2 className="font-semibold font-poppins leading-relaxed text-2xl">
						A Co-criar leva seu propósito “movimentar positivamente a evolução
						de pessoas e organizações”, de forma coerente em suas abordagens de
						atuação.
					</h2>
					<div className="flex flex-col gap-8">
						<p className="text-lg text-neutral-700 font-inter">
							A Co-criar leva seu propósito “movimentar positivamente a evolução
							de pessoas e organizações”, de forma coerente em suas abordagens
							de atuação.
						</p>
						<p className="text-lg text-neutral-700 font-inter">
							Para isso, acreditamos que as melhores possibilidades de
							desenvolvimento são criadas através da colaboração e de permitir
							que as pessoas se encontrem, gerando novos saberes e novas
							soluções.
						</p>
						<p className="text-lg text-neutral-700 font-inter">
							Estimular a cocriação de alternativas contribui na resolução de
							situações complexas. Isso acontece, pois, ao incluir diferentes
							perspectivas, é possível ampliar a visão de realidade,
							considerando elementos diversos, os quais são gerados pelas
							pessoas através de complementariedade e valorização das
							competências e contribuições de cada um aos resultados do time e
							da organização.
						</p>
						<p className="text-lg text-neutral-700 font-inter">
							Buscamos, em nossas abordagens, integrar fundamentação
							consistente, técnicas sólidas e experimentação útil às
							necessidades organizacionais, com efetividade e impacto nos
							resultados e sustentabilidade do negócio.
						</p>
						<p className="text-lg text-neutral-700 font-inter">
							Ao encontro disso, o ponto de partida se dá na priorização de
							relacionamentos interpessoais apoiadores, conexão genuína,
							integridade e corresponsabilidade.
						</p>
					</div>
				</div>
			</Section>
			<Section tag="Founder Co-criar" id="dono">
				<div className="flex flex-wrap gap-10 shrink-0">
					<div className="shrink-0 flex flex-col gap-12 flex-1 basis-md">
						<div>
							<h3 className="title">Sobre a Letiene Ferreira</h3>
							<hr className="detach-hr" />
						</div>
						<div className="flex flex-col gap-8">
							<p className="text-lg text-neutral-700 font-inter">
								Fundadora da Co-criar e facilitadora organizacional.
							</p>
							<p className="text-lg text-neutral-700 font-inter">
								Mestre em Psicologia e Saúde (UFCSPA), pesquisando sobre
								Psicologia Organizacional Positiva e Liderança Engajadora;
								Pós-graduação em Liderança de Negócios e Pessoas (ESPM),
								Especialização em Educação Permanente em Saúde (UFRGS) e
								Graduação em Psicologia (PUCRS).
							</p>
							<p className="text-lg text-neutral-700 font-inter">
								Formação em Coaching e Mentoring pelo Institutho dy Crescere
								Personas; Especialização em Neurocoaching
								(Neuroleadership/Fellipelli); Seminário Avançado em Liderança e
								Cultura (Rosemary Napper/UK); Coaching de Times (Georgina
								Woudstra/UK); Desenvolvimento de Facilitadores, Educadores e
								Treinadores (Rosemary Napper/UK); Coaching Executivo pela
								Academy of Executive Coaching; Qualificação MBTI Integrado Step
								I e II (Fellipelli).
							</p>
							<p className="text-lg text-neutral-700 font-inter">
								Cocoordenadora do MBA em Liderança e Comportamento
								Organizacional 8ª Edição e Professora na Especialização em
								Psicologia Organizacional e do Trabalho na IMED Passo Fundo.
								Facilitadora parceira de programas de Desenvolvimento
								Organizacional no ICP. Pesquisadora colaboradora do Núcleo de
								Estudos em Psicologia Positiva Organizacional e do Trabalho da
								UFCSPA.
							</p>
						</div>
					</div>
					<div className="shrink-0 basis-md flex-1 w-fit flex items-center justify-center ">
						<Image
							src={owner}
							alt="Letiene Ferreira"
							width={466}
							height={699}
						/>
					</div>
				</div>
			</Section>
		</main>
	);
}

export default Sobre;
