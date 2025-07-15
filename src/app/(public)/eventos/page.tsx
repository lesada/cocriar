"use client";

import Button from "@/components/Button";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";
import { events } from "./constants";

function Artigos() {
	const { push } = useRouter();

	return (
		<main>
			<Section>
				<h1 className="mb-12 text-center title">Eventos</h1>
				<div className="flex flex-col gap-4">
					{events.map((event) => {
						return (
							<div
								className="flex md:flex-row flex-col gap-6 bg-neutral-0 shadow-xl p-4 rounded-lg text-left cursor-pointer"
								key={event.slug}
							>
								<div className="flex flex-col gap-4 w-full max-w-md shrink-0">
									<span className="tag">{event.tag}</span>
									<div className="w-full shrink-0">
										<img
											src={event.image}
											alt=""
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h2 className="font-poppins font-medium text-2xl">
										{event.title}
									</h2>
									<p className="flex-1 font-inter text-neutral-700 text-base">
										{event.text}
									</p>
									<Button
										onClick={() => push(`/artigos/${event.slug}`)}
										type="button"
										variant="secondary"
										outlined
										className="w-full"
									>
										Inscreva-se
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</Section>
		</main>
	);
}

export default Artigos;
