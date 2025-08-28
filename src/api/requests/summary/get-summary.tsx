import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { SummaryResponse } from "./types";

export async function getSummary() {
	const { data } = await api.get<SummaryResponse>(API_ROUTES.SUMMARY);
	return data;
}
