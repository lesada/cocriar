import ellipseSm from "@/assets/icons/ellipse-sm.png";
import ellipse from "@/assets/icons/ellipse.png";
import Image from "next/image";

function ScheduleCard() {
	return (
		<section className="px-4 w-full">
			<div className="relative flex md:flex-row flex-col justify-between md:items-center gap-4 bg-cyan-400 lg:mx-auto px-9 lg:px-32 py-6 rounded-3xl max-w-[75rem]">
				<div className="flex flex-col gap-4">
					<h2 className="font-poppins font-semibold text-white text-2xl lg:text-4xl">
						Sua jornada de desenvolvimento começa agora!
					</h2>
					<p className="font-poppins text-white text-base lg:text-lg">
						Podemos ajudar você e sua empresa a crescer através de soluções e
						metodologias{" "}
					</p>
				</div>

				<button
					type="button"
					className="flex justify-center items-center bg-gold-200 px-8 py-4 rounded-3xl lg:min-w-[15rem] md:max-h-14 font-semibold text-white text-xs lg:text-base"
				>
					Agendar um horário
				</button>

				<Image
					src={ellipse}
					alt=""
					width={200}
					height={200}
					className="hidden lg:block top-[-1.3rem] left-[-8rem] absolute"
				/>
				<Image
					src={ellipseSm}
					alt=""
					height={70}
					width={70}
					className="hidden lg:block right-0 bottom-0 absolute"
				/>
			</div>
		</section>
	);
}

export default ScheduleCard;
