"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { events } from "./constants";

function Events() {
	const router = useRouter();

	return (
		<Section tag="Eventos" id="eventos">
			<h3 className="title">Próximos eventos</h3>
			<div className="flex flex-wrap justify-center gap-8">
				{events.slice(0, 3).map((event) => (
					<Card
						image={event.image}
						title={event.title}
						subtitle={event.subtitle}
						tag={event.tag}
						key={event.slug}
						as="div"
					>
						<Button
							onClick={() =>
								router.push(ROUTES_PATHS.EVENT.replace(":id", event.slug))
							}
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
				className="flex items-center gap-0.5 mt-8 ml-auto w-fit font-bold text-blue-950 text-lg"
			>
				Ver mais eventos
				<Icon icon="material-symbols:arrow-right-alt-rounded" />
			</Link>
		</Section>
	);
}

export default Events;
