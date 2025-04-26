"use client";

import Section from "@/components/Section";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { slides } from "./constants";

export default function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		dragFree: true,
	});

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect();
		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on("select", onSelect);
	}, [emblaApi, onSelect]);

	const scrollTo = useCallback(
		(index: number) => emblaApi?.scrollTo(index),
		[emblaApi],
	);

	return (
		<Section tag="Depoimentos de Clientes" className="bg-neutral-100">
			<h3 className="my-4 text-center title">
				Empresas que confiam na Co-criar
			</h3>
			<p className="mb-4 text-center text">
				O que nossos parceiros dizem sobre nós
			</p>
			<div className="w-full">
				<div className="py-8 overflow-hidden" ref={emblaRef}>
					<div className="flex items-stretch gap-6">
						{slides.map((slide) => (
							<div
								key={slide.name}
								className="flex flex-col justify-between bg-neutral-0 shadow-sm p-10 rounded-lg w-full max-w-[30rem] shrink-0"
							>
								<h4 className="font-inter font-bold text-neutral-1000 text-xl">
									{slide.name}
								</h4>
								<p className="mb-6 font-poppins text-neutral-700 text-base">
									{slide.subtitle}
								</p>

								<p className="flex-1 mb-6 text-neutral-1000 text-normal">
									{slide.text}
								</p>
								<div className="flex mb-2">
									{Array.from({ length: 5 }).map((_, i) => (
										<Icon
											icon={
												i < Math.round(slide.rating)
													? "material-symbols:star-rate-rounded"
													: "material-symbols:star-rate-outline-rounded"
											}
											width={20}
											height={20}
											// biome-ignore lint/suspicious/noArrayIndexKey: <the array is meant to create the starts without copy pasting code>
											key={i}
											className={`${
												i < Math.round(slide.rating)
													? "text-gold-200"
													: "text-neutral-300"
											}`}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Dots */}
				<div className="flex justify-center gap-2 mt-6">
					{scrollSnaps.map((_, index) => (
						<button
							// biome-ignore lint/suspicious/noArrayIndexKey: <works only with the index>
							key={index}
							type="button"
							className={clsx(
								"w-12 h-2 cursor-pointer",
								index === selectedIndex ? "bg-blue-600" : "bg-neutral-300",
							)}
							onClick={() => scrollTo(index)}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}
