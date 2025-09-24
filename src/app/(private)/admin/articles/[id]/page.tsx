"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import RichText from "@/components/RichText";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";

function Article() {
	const { control } = useForm({
		defaultValues: {
			title: "",
			content: "",
			category: "",
		},
	});

	return (
		<main className="flex flex-col flex-1 bg-blue-50 px-6 py-36 min-h-screen">
			<h1 className="mb-8 font-medium text-3xl">Adicionar novo artigo</h1>

			<form className="flex flex-col gap-4">
				<Input
					label="Título do artigo"
					control={control}
					name="title"
					variant="secondary"
					placeholder=""
				/>

				<button
					type="button"
					className="flex items-center gap-2 my-4 font-medium text-blue-800 cursor-pointer"
				>
					<Icon
						icon="ic:round-plus"
						width={20}
						height={20}
						className="shrink-0"
					/>
					Adicionar mídia
				</button>

				<Input
					label="Categoria"
					control={control}
					name="category"
					variant="secondary"
					placeholder=""
				/>

				<h2 className="mb-4 font-medium text-xl">Inserir conteúdo</h2>
				<RichText />
				<Button className="mt-4">Salvar</Button>
			</form>
		</main>
	);
}

export default Article;
