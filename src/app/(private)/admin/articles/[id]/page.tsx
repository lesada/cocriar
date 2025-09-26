"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import RichText from "@/components/RichText";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ModalImage from "./modal-image";
import { type ArticleFormData, articleSchema } from "./schema";

function Article() {
	const [imageBase64, setImageBase64] = useState<string | null>(null);
	const [isModalImageOpen, setIsModalImageOpen] = useState(false);

	const { control } = useForm<ArticleFormData>({
		defaultValues: {
			title: "",
			content: "",
			category: "",
		},
		resolver: yupResolver(articleSchema),
	});

	const handleAddImage = () => {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = "image/*";
		input.onchange = async (e: Event) => {
			const target = e.target as HTMLInputElement;
			const file = target.files?.[0];
			if (file) {
				const reader = new FileReader();
				reader.onloadend = () => {
					const base64String = reader.result as string;
					setImageBase64(base64String);
				};
				reader.readAsDataURL(file);
			}
		};
		input.click();
	};

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

				{imageBase64 ? (
					<button
						onClick={() => setIsModalImageOpen(true)}
						type="button"
						className="cursor-pointer"
					>
						<img
							src={imageBase64}
							alt="Selected"
							className="rounded-md w-full max-w-10 max-h-20 object-cover"
						/>
					</button>
				) : (
					<button
						type="button"
						className="flex items-center gap-2 my-4 font-medium text-blue-800 cursor-pointer"
						onClick={() => handleAddImage()}
					>
						<Icon
							icon="ic:round-plus"
							width={20}
							height={20}
							className="shrink-0"
						/>
						Adicionar mídia
					</button>
				)}

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
			{isModalImageOpen && (
				<ModalImage
					base64={imageBase64}
					deleteImage={() => setImageBase64(null)}
					onClose={() => setIsModalImageOpen(false)}
				/>
			)}
		</main>
	);
}

export default Article;
