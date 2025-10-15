import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

export async function deleteEvent(eventId: string) {
	try {
		await api.delete(`${API_ROUTES.EVENTS}/${eventId}`);
	} catch (error) {
		console.error("Error deleting event:", error);
		throw error;
	}
}
