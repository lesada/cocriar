import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

type UpdateEventParams = {
	id: string;
	title: string;
	image_url: string | null;
	category: string;
	content: string;
};

export async function updateEvent({
	id,
	title,
	image_url,
	category,
	content,
}: UpdateEventParams) {
	try {
		await api.patch(`${API_ROUTES.EVENTS}/${id}`, {
			title,
			image_url,
			category,
			content,
		});
	} catch (error) {
		console.error("Error updating event:", error);
		throw error;
	}
}
