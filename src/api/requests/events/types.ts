type Event = {
	id: string;
	title: string;
	content: string;
	event_date: Date;
	address: string;
	max_participants: number;
	image_url: string;
};

export type GetEventResponse = {
	event: Event;
};

export type GetEventsResponse = {
	events: Event[];
};
