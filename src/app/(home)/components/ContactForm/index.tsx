import Input from "@/components/Input";
import Section from "@/components/Section";

function ContactForm() {
	return (
		<Section className="bg-cyan-200">
			<div className="flex lg:flex-row flex-col gap-5 lg:gap-16">
				<div className="flex flex-col gap-6 lg:pt-20">
					<h2 className="font-poppins font-semibold text-blue-900 text-2xl md:text-4xl leading-relaxed">
						Vamos juntos Co-criar inovação e desenvolvimento?
					</h2>

					<p className="font-inter text-neutral-800 text-lg leading-9">
						Preencha o formulário ao lado e dê o primeiro passo no caminho do
						desenvolvimento pessoal e/ou corporativo. <br />
						Em breve, entraremos em contato para marcar uma conversa
						personalizada.
					</p>

					<strong className="font-semibold text-neutral-800 text-lg">
						(51) 98438-6892
					</strong>

					<strong className="font-semibold text-neutral-800 text-lg leading-8">
						Av Carlos Gomes, 111 11º andar/1101 Auxiliadora <br />
						Porto Alegre - RS - Brasil
						<br />
						90480-003
					</strong>
				</div>

				<div className="flex flex-col gap-4 bg-cyan-500 p-5 md:p-8 rounded-4xl max-w-[33.5rem]">
					<h2 className="font-poppins font-semibold text-white text-lg md:text-2xl">
						Entre em contato
					</h2>

					<p className="font-inter text-white text-base md:text-lg leading-9">
						Dúvidas sobre nossos serviços e como podemos te ajudar? Entre em
						contato!
					</p>

					<form className="flex flex-col items-center gap-4 w-full">
						<Input label="Nome" name="name" placeholder="Digite seu nome" />

						<button
							type="submit"
							className="bg-blue-800 mt-3 px-8 md:px-4 py-3 md:py-4.5 rounded-3xl w-full md:max-w-3xs font-semibold text-white text-sm cursor-pointer"
						>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</Section>
	);
}

export default ContactForm;
