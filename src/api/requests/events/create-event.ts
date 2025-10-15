import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

type CreateEventParams = {
	title: string;
	content: string;
	event_date: Date;
	address?: string;
	max_participants: number;
	image_url?: string | null;
};

export async function createEvent({
	title,
	image_url,
	content,
	event_date,
	address,
	max_participants,
}: CreateEventParams) {
	try {
		await api.post(`${API_ROUTES.EVENTS}/`, {
			title,
			image_url,
			content,
			event_date,
			address,
			max_participants,
		});
	} catch (error) {
		console.error("Error updating event:", error);
		throw error;
	}
}
