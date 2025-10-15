import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { GetEventsResponse } from "./types";

type GetEventsParams = {
	category?: string | null;
	limit?: number | null;
};

export async function getEvents(params: GetEventsParams = {}) {
	const { category, limit } = params;

	try {
		const { data } = await api.get<GetEventsResponse>(API_ROUTES.EVENTS, {
			params: {
				category,
				limit,
			},
		});
		return data;
	} catch (error) {
		console.error("Error fetching events:", error);
		throw error;
	}
}
