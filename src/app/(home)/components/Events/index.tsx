"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { events } from "./constants";

function Events() {
	const router = useRouter();

	return (
		<Section tag="Eventos" id="eventos">
			<h3 className="title">Próximos eventos</h3>
			<div className="flex gap-8 flex-wrap justify-center">
				{events.slice(0, 3).map((event) => (
					<Card
						image={event.image}
						subtitle={event.subtitle}
						tag={event.tag}
						title={event.title}
						key={event.slug}
						as="div"
					>
						<Button
							onClick={() => router.push(`events/${event.slug}`)}
							variant="secondary"
							outlined
						>
							Saiba mais
						</Button>
					</Card>
				))}
			</div>
			<Link
				href="/eventos"
				className="ml-auto font-bold text-lg w-fit flex items-center gap-0.5 text-blue-950 mt-8"
			>
				Ver mais eventos
				<ArrowRight />
			</Link>
		</Section>
	);
}

export default Events;
