import hero from "@/assets/hero-about.png";
import owner from "@/assets/owner.png";
import Section from "@/components/Section";
import Image from "next/image";

function Sobre() {
	return (
		<main>
			<div className="w-full">
				<Image src={hero} alt="" width={1440} height={589} className="w-full" />
			</div>
			<Section tag="Quem somos?">
				<div className="flex flex-col gap-12">
					<div>
						<h1 className="title">A Co-criar</h1>
						<hr className="detach-hr" />
					</div>
					<h2 className="font-poppins font-semibold text-2xl leading-relaxed">
						A Co-criar leva seu propósito “movimentar positivamente a evolução
						de pessoas e organizações”, de forma coerente em suas abordagens de
						atuação.
					</h2>
					<div className="flex flex-col gap-8">
						<p className="font-inter text-neutral-700 text-lg">
							A Co-criar leva seu propósito “movimentar positivamente a evolução
							de pessoas e organizações”, de forma coerente em suas abordagens
							de atuação.
						</p>
						<p className="font-inter text-neutral-700 text-lg">
							Para isso, acreditamos que as melhores possibilidades de
							desenvolvimento são criadas através da colaboração e de permitir
							que as pessoas se encontrem, gerando novos saberes e novas
							soluções.
						</p>
						<p className="font-inter text-neutral-700 text-lg">
							Estimular a cocriação de alternativas contribui na resolução de
							situações complexas. Isso acontece, pois, ao incluir diferentes
							perspectivas, é possível ampliar a visão de realidade,
							considerando elementos diversos, os quais são gerados pelas
							pessoas através de complementariedade e valorização das
							competências e contribuições de cada um aos resultados do time e
							da organização.
						</p>
						<p className="font-inter text-neutral-700 text-lg">
							Buscamos, em nossas abordagens, integrar fundamentação
							consistente, técnicas sólidas e experimentação útil às
							necessidades organizacionais, com efetividade e impacto nos
							resultados e sustentabilidade do negócio.
						</p>
						<p className="font-inter text-neutral-700 text-lg">
							Ao encontro disso, o ponto de partida se dá na priorização de
							relacionamentos interpessoais apoiadores, conexão genuína,
							integridade e corresponsabilidade.
						</p>
					</div>
				</div>
			</Section>
			<Section tag="Founder Co-criar" id="dono">
				<div className="flex flex-wrap gap-10 shrink-0">
					<div className="flex flex-col flex-1 gap-12 shrink-0 basis-md">
						<div>
							<h3 className="title">Sobre a Letiene Ferreira</h3>
							<hr className="detach-hr" />
						</div>
						<div className="flex flex-col gap-8">
							<p className="font-inter text-neutral-700 text-lg">
								Fundadora da Co-criar e facilitadora organizacional.
							</p>
							<p className="font-inter text-neutral-700 text-lg">
								Mestre em Psicologia e Saúde (UFCSPA), pesquisando sobre
								Psicologia Organizacional Positiva e Liderança Engajadora;
								Pós-graduação em Liderança de Negócios e Pessoas (ESPM),
								Especialização em Educação Permanente em Saúde (UFRGS) e
								Graduação em Psicologia (PUCRS).
							</p>
							<p className="font-inter text-neutral-700 text-lg">
								Formação em Coaching e Mentoring pelo Institutho dy Crescere
								Personas; Especialização em Neurocoaching
								(Neuroleadership/Fellipelli); Seminário Avançado em Liderança e
								Cultura (Rosemary Napper/UK); Coaching de Times (Georgina
								Woudstra/UK); Desenvolvimento de Facilitadores, Educadores e
								Treinadores (Rosemary Napper/UK); Coaching Executivo pela
								Academy of Executive Coaching; Qualificação MBTI Integrado Step
								I e II (Fellipelli).
							</p>
							<p className="font-inter text-neutral-700 text-lg">
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
					<div className="flex flex-1 justify-center items-center w-fit shrink-0 basis-md">
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
