import heroImage from "@/assets/hero-cocriar.png";
import Image from "next/image";

function HeroBanner() {
	return (
		<section className="relative flex md:flex-row flex-col justify-between gap-5 px-8 lg:px-32 pt-10 lg:h-[40rem]">
			<div className="flex md:flex-row flex-col lg:items-center gap-5 md:gap-7 mx-auto">
				<div className="flex flex-col gap-4 lg:mt-25 md:max-w-[42rem]">
					<span className="font-inter text-purple-900 text-base lg:text-lg uppercase">
						Co-criar desenvolvimento
					</span>
					<h1 className="font-poppins font-semibold text-2xl lg:text-4xl">
						Desenvolvimento Pessoal e Profissional para evoluir e crescer
					</h1>
					<p className="font-normal text-base">
						A Co-criar leva seu propósito “movimentar positivamente a evolução
						de pessoas e organizações”, de forma coerente em suas abordagens de
						atuação.
					</p>
					<button
						type="button"
						className="bg-blue-800 mt-3 rounded-3xl w-full md:max-w-72 h-14 text-white text-sm lg:text-base"
					>
						Agendar um horário
					</button>
				</div>

				<Image
					src={heroImage}
					width={600}
					height={600}
					alt=""
					className="mx-auto h-auto lg:h-full object-contain"
				/>
			</div>
		</section>
	);
}

export default HeroBanner;
