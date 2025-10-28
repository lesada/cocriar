import * as yup from "yup";

export const eventSchema = yup.object({
	title: yup.string().required("Title is required"),
	content: yup.string().required("Content is required"),
	event_date: yup.string().required("Event date is required"),
	event_address: yup.string().optional(),
	max_participants: yup.number().optional().min(1, "Must be at least 1"),
});

export type EventFormData = yup.InferType<typeof eventSchema>;
