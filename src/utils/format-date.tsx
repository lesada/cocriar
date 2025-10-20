import { format, parse } from "date-fns";

export function formatDateToString(date: Date): string {
	return format(date, "dd/MM/yyyy");
}

export function formatStringToDate(dateString: string): Date {
	return parse(dateString, "dd/MM/yyyy", new Date());
}
