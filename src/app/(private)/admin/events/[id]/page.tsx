"use client";

import { createEvent } from "@/api/requests/events/create-event";
import { getEventById } from "@/api/requests/events/get-event-by-id";
import { updateEvent } from "@/api/requests/events/update-event";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ModalAddImage from "@/components/ModalAddImage";
import RichText from "@/components/RichText";
import { formatDateToString, formatStringToDate } from "@/utils/format-date";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type Resolver, useForm } from "react-hook-form";
import { type EventFormData, eventSchema } from "./schema";

function Event() {
	const { id } = useParams<{ id: string }>();

	const isNewEvent = id === "novo";

	const { control, reset, setValue, watch, handleSubmit } =
		useForm<EventFormData>({
			defaultValues: {
				title: "",
				content: "",
				event_date: "",
				event_address: "",
				max_participants: 0,
			},
			resolver: yupResolver(eventSchema) as Resolver<EventFormData>,
			mode: "onSubmit",
		});

	const wContent = watch("content");

	const { data, isSuccess } = useQuery({
		queryKey: ["events", id],
		queryFn: () =>
			getEventById({
				id,
			}),
		enabled: !isNewEvent,
	});

	const [imageBase64, setImageBase64] = useState<string | null>(null);
	const [isModalImageOpen, setIsModalImageOpen] = useState(false);

	useEffect(() => {
		if (isSuccess && data.event) {
			reset({
				title: data.event.title,
				content: data.event.content,
				event_date: formatDateToString(data.event.event_date),
				event_address: data.event.address,
				max_participants: data.event.max_participants,
			});

			setImageBase64(data.event.image_url || null);
		}
	}, [data, isSuccess, reset]);

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

	async function handleSave(data: EventFormData) {
		if (isNewEvent)
			await createEvent({
				...data,
				address: data.event_address,
				event_date: formatStringToDate(data.event_date),
				image_url: imageBase64,
			});
		else
			await updateEvent({
				...data,
				id,
				event_date: formatStringToDate(data.event_date),
				image_url: imageBase64,
			});
	}

	return (
		<main className="flex flex-col flex-1 bg-blue-50 px-6 py-36 min-h-screen">
			<h1 className="mb-8 font-medium text-3xl">
				{isNewEvent ? "Novo evento" : "Editar evento"}
			</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSave)}>
				<Input
					label="Título do evento"
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

				<h2 className="mb-4 font-medium text-xl">Inserir conteúdo</h2>
				<RichText onChange={(v) => setValue("content", v)} value={wContent} />
				<section className="bg-white p-4 rounded-md">
					<h2 className="mb-8 font-inter font-medium text-xl">
						Dados do evento
					</h2>
					<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
						<Input
							label="Data do evento"
							control={control}
							name="event_date"
							variant="secondary"
							placeholder="DD/MM/AAAA"
						/>
						<Input
							label="Local do evento"
							control={control}
							name="event_address"
							variant="secondary"
							placeholder="Remoto ou endereço físico"
						/>
						<Input
							label="Número máximo de participantes"
							control={control}
							name="max_participants"
							variant="secondary"
							placeholder="100"
						/>
					</div>
				</section>
				<Button className="mt-4" type="submit">
					Salvar
				</Button>
			</form>
			{isModalImageOpen && (
				<ModalAddImage
					base64={imageBase64}
					deleteImage={() => setImageBase64(null)}
					onClose={() => setIsModalImageOpen(false)}
				/>
			)}
		</main>
	);
}

export default Event;
