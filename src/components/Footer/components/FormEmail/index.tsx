"use client";

import logo from "@/assets/cocriar-icon-reduced.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { type TSchemaEmail, schemaEmail } from "./schema";

function FormEmail() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TSchemaEmail>({
		resolver: yupResolver(schemaEmail),
	});

	function handleSubmitEmail(dados: TSchemaEmail) {
		console.log(dados);
	}

	return (
		<form
			className="flex flex-col items-center gap-5 xl:items-start xl:gap-8"
			onSubmit={handleSubmit(handleSubmitEmail)}
		>
			<Image src={logo} alt="Logotipo Co-criar" width={80} height={80} />

			<p className="text-neutral-0 font-inter font-bold text-2xl leading-relaxed text-center lg:text-start lg:max-w-[21.5rem]">
				Inscreva-se e acompanhe nosso conteúdo na íntegra
			</p>

			<div className="flex justify-between border-b border-gold-100 lg:w-[21.5rem] relative">
				<input
					{...register("email")}
					className="h-13 text-neutral-0 bg-transparent placeholder:text-base placeholder:font-inter outline-none m-0 w-full"
					type="text"
					placeholder="Endereço de e-mail"
					data-testid="email-subscribe"
				/>
				<button
					type="submit"
					aria-label="Enviar e-mail"
					className="bg-gold-100 h-13 min-w-13 rounded-t-lg flex flex-col items-center justify-center cursor-pointer font-medium"
					data-testid="submit-subscribe"
				>
					<ChevronRight width={20} height={20} className="text-gray-500" />
				</button>

				<span className="text-sm absolute text-red-400 bottom-[-1.6rem]">
					{errors.email && <p>{errors.email.message}</p>}
				</span>
			</div>
		</form>
	);
}

export default FormEmail;
