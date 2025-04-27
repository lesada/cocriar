"use client";

import logo from "@/assets/cocriar-icon-reduced.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
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
			className="flex flex-col items-center xl:items-start gap-5 xl:gap-8"
			onSubmit={handleSubmit(handleSubmitEmail)}
		>
			<Image src={logo} alt="Logotipo Co-criar" width={80} height={80} />

			<p className="lg:max-w-[21.5rem] font-inter font-bold text-neutral-0 text-2xl text-center lg:text-start leading-relaxed">
				Inscreva-se e acompanhe nosso conteúdo na íntegra
			</p>

			<div className="relative flex justify-between border-gold-100 border-b lg:w-[21.5rem]">
				<input
					{...register("email")}
					className="bg-transparent m-0 outline-none w-full h-13 placeholder:font-inter text-neutral-0 placeholder:text-base"
					type="text"
					placeholder="Endereço de e-mail"
					data-testid="email-subscribe"
				/>
				<button
					type="submit"
					aria-label="Enviar e-mail"
					className="flex flex-col justify-center items-center bg-gold-100 rounded-t-lg min-w-13 h-13 font-medium cursor-pointer"
					data-testid="submit-subscribe"
				>
					<Icon
						icon="material-symbols:chevron-right"
						width={20}
						height={20}
						className="text-gray-500"
					/>
				</button>

				<span className="bottom-[-1.6rem] absolute text-red-400 text-sm">
					{errors.email && <p>{errors.email.message}</p>}
				</span>
			</div>
		</form>
	);
}

export default FormEmail;
