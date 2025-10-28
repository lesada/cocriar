import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

type UpdateEventParams = {
	id: string;
	title?: string;
	content?: string;
	event_date?: Date;
	address?: string;
	max_participants?: number;
	image_url?: string | null;
};

export async function updateEvent({
	id,
	title,
	image_url,
	content,
	event_date,
	address,
	max_participants,
}: UpdateEventParams) {
	try {
		await api.patch(`${API_ROUTES.EVENTS}/${id}`, {
			title,
			image_url,
			event_date,
			address,
			max_participants,
			content,
		});
	} catch (error) {
		console.error("Error updating event:", error);
		throw error;
	}
}
