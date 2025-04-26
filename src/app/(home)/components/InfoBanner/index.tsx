import owner from "@/assets/owner.png";
import Section from "@/components/Section";
import Image from "next/image";

function InfoBanner() {
	return (
		<Section tag="Por que a co-criar?" className="w-full">
			<div className="flex md:flex-row flex-col items-center md:items-start gap-10 mx-auto max-w-[90rem]">
				<div className="flex flex-col gap-4">
					<h2 className="font-poppins font-semibold text-4xl">
						Nosso proposito é movimentar e evoluir
					</h2>

					<p className="font-inter text-neutral-700 text-lg leading-8">
						A Co-criar leva seu propósito “movimentar positivamente a evolução
						de pessoas e organizações”, de forma coerente em suas abordagens de
						atuação. <br />
						Para isso, acreditamos que as melhores possibilidades de
						desenvolvimento são criadas através da colaboração e de permitir que
						as pessoas se encontrem, gerando novos saberes e novas soluções.{" "}
						<br />
						Estimular a cocriação de alternativas contribui na resolução de
						situações complexas.
					</p>

					<button
						type="button"
						className="bg-blue-800 mt-3 lg:mt-8 rounded-3xl w-full md:max-w-72 h-14 font-semibold text-white text-sm lg:text-base cursor-pointer"
					>
						Saiba Mais
					</button>
				</div>

				<Image
					src={owner}
					width={400}
					height={600}
					alt=""
					className="flex flex-1 shrink-0 lg:basis-md"
				/>
			</div>
		</Section>
	);
}

export default InfoBanner;
