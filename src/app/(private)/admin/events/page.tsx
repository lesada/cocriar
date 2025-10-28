"use client";

import { deleteEvent } from "@/api/requests/events/delete-event";
import { getEvents } from "@/api/requests/events/get-events";
import type { GetEventsResponse } from "@/api/requests/events/types";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ShimmerSkeleton from "@/components/ShimmerSkeleton";
import Table from "@/components/Table";
import { queryClient } from "@/contexts/query-client";
import { ROUTES_PATHS } from "@/routes";
import { formatDateToString } from "@/utils/format-date";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EventSkeleton() {
	return (
		<Table.Row>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
		</Table.Row>
	);
}

function Events() {
	const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
	const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
	const router = useRouter();

	const { data, isSuccess } = useQuery({
		queryKey: ["events"],
		queryFn: () => getEvents(),
	});

	function handleClickDeleteEvent(id: string) {
		setIsOpenConfirmModal(true);
		setSelectedEventId(id);
	}

	function handleEditEvent(id: string) {
		router.push(ROUTES_PATHS.ADMIN_EVENT.replace(":id", id));
	}

	const { mutateAsync: handleDeleteEvent } = useMutation({
		mutationFn: (id: string) => deleteEvent(id).then(() => id),
		onSuccess: (deletedId: string) => {
			queryClient.setQueryData(["events"], (oldData: GetEventsResponse) => ({
				...oldData,
				events: oldData.events.filter((event) => event.id !== deletedId),
			}));
			setIsOpenConfirmModal(false);
		},
	});

	return (
		<main className="flex flex-col flex-1 bg-blue-50 px-6 py-36 min-h-screen">
			<h1 className="mb-12 font-poppins font-medium text-neutral-900 text-5xl">
				Eventos
			</h1>
			<Button
				className="mb-10"
				onClick={() =>
					router.push(ROUTES_PATHS.ADMIN_EVENT.replace(":id", "novo"))
				}
			>
				Adicionar novo evento
			</Button>
			<Table.Container>
				<Table.Header>
					<Table.Cell>Título</Table.Cell>
					<Table.Cell>Categoria</Table.Cell>
					<Table.Cell>Data do evento</Table.Cell>
					<Table.Cell>Máximo de participantes</Table.Cell>
					<Table.Cell>Ações</Table.Cell>
				</Table.Header>

				<Table.Body>
					{data?.events.map((event) => (
						<Table.Row key={event.title}>
							<Table.Cell>{event.title}</Table.Cell>
							<Table.Cell>Evento</Table.Cell>
							<Table.Cell>{formatDateToString(event.event_date)}</Table.Cell>
							<Table.Cell>{event.max_participants}</Table.Cell>
							<Table.Actions>
								<button
									className="text-neutral-600 hover:text-neutral-800 cursor-pointer"
									type="button"
									onClick={() => handleEditEvent(event.id)}
								>
									<Icon icon="mdi:pencil" width="16" height="16" />
								</button>
								<button
									className="text-neutral-600 hover:text-neutral-800 cursor-pointer"
									type="button"
									onClick={() => handleClickDeleteEvent(event.id)}
								>
									<Icon icon="mdi:delete" width="16" height="16" />
								</button>
							</Table.Actions>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Container>
			<Modal
				isOpen={isOpenConfirmModal}
				onCancel={() => {
					setIsOpenConfirmModal(false);
					setSelectedEventId(null);
				}}
				onConfirm={() => handleDeleteEvent(selectedEventId ?? "")}
				title="Confirmar exclusão do artigo"
			/>
		</main>
	);
}

export default Events;
