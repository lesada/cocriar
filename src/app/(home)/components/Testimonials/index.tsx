"use client";

import Section from "@/components/Section";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
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
			<h3 className="title my-4 text-center">
				Empresas que confiam na Co-criar
			</h3>
			<p className="text text-center mb-4">
				O que nossos parceiros dizem sobre nós
			</p>
			<div className="w-full">
				<div className="overflow-hidden py-8" ref={emblaRef}>
					<div className="flex gap-6 items-stretch">
						{slides.map((slide) => (
							<div
								key={slide.name}
								className="max-w-[30rem] w-full  bg-neutral-0 p-10 rounded-lg shadow-sm  flex flex-col justify-between shrink-0 "
							>
								<h4 className="text-xl font-bold text-neutral-1000 font-inter ">
									{slide.name}
								</h4>
								<p className="text-base text-neutral-700 font-poppins mb-6">
									{slide.subtitle}
								</p>

								<p className="text-normal text-neutral-1000 mb-6 flex-1">
									{slide.text}
								</p>
								<div className="mb-2 flex">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star
											// biome-ignore lint/suspicious/noArrayIndexKey: <the array is meant to create the starts without copy pasting code>
											key={i}
											size={20}
											className={`${
												i < Math.round(slide.rating)
													? "text-gold-200"
													: "text-neutral-300"
											}`}
											fill={
												i < Math.round(slide.rating) ? "currentColor" : "none"
											}
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
