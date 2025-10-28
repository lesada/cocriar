import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { GetEventResponse } from "./types";

type GetEventByIdParams = {
	id: string;
};

export async function getEventById({ id }: GetEventByIdParams) {
	const { data } = await api.get<GetEventResponse>(
		API_ROUTES.EVENT.replace(":id", id),
	);
	return data;
}
