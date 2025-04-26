import heroImage from "@/assets/hero-cocriar.png";
import Image from "next/image";

function HeroBanner() {
	return (
		<section className="flex flex-col pt-10 px-8 gap-5 relative justify-between md:flex-row lg:px-32 lg:h-[40rem]">
			<div className="flex flex-col gap-5 mx-auto md:gap-7 md:flex-row lg:items-center">
				<div className="flex flex-col gap-4 md:max-w-[42rem] lg:mt-25">
					<span className="font-inter uppercase text-base text-purple-900 lg:text-lg">
						Co-criar desenvolvimento
					</span>
					<h1 className="font-poppins font-semibold text-2xl lg:text-4xl">
						Desenvolvimento Pessoal e Profissional para evoluir e crescer
					</h1>
					<p className="text-base font-normal">
						A Co-criar leva seu propósito “movimentar positivamente a evolução
						de pessoas e organizações”, de forma coerente em suas abordagens de
						atuação.
					</p>
					<button
						type="button"
						className="w-full bg-blue-800 text-white text-sm h-14 rounded-3xl mt-3 md:max-w-72 lg:text-base"
					>
						Agendar um horário
					</button>
				</div>

				<Image
					src={heroImage}
					alt=""
					className="h-auto object-contain mx-auto lg:h-full"
				/>
			</div>
		</section>
	);
}

export default HeroBanner;
