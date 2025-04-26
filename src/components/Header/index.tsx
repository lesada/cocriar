"use client";

import logo from "@/assets/logo.png";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../Button";
import { routes } from "./constants";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const isActive = (path: string) =>
		pathname === path ? "text-blue-800 font-bold" : "text-neutral-600";

	return (
		<header className="top-0 z-50 sticky flex justify-center lg:justify-start items-center gap-16 bg-neutral-0 lg:px-12 py-6 border-neutral-100 border-b-1 w-full">
			<div className="lg:hidden w-10" />
			<Image
				src={logo}
				alt="Co-criar"
				className="shrink-0"
				width={120}
				height={50}
			/>
			<nav className="hidden lg:flex flex-1">
				<ul className="flex flex-1 items-center gap-3 font-inter text-lg leading-relaxed">
					{routes.map((route) => (
						<li key={route.path} className="flex-1">
							<Link href={route.path} className={isActive(route.path)}>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<button
				className="lg:hidden flex justify-center items-center p-2"
				onClick={toggleMenu}
				type="button"
			>
				<Icon icon="material-symbols:menu-rounded" width={30} height={30} />
			</button>

			<div
				className={clsx(
					"lg:hidden top-25 right-0 left-0 absolute bg-white shadow-lg px-6 py-4 transition-all duration-300 transform",
					{
						block: isMenuOpen,
						hidden: !isMenuOpen,
					},
				)}
			>
				<ul className="flex flex-col gap-3 font-inter text-lg leading-relaxed">
					{routes.map((route) => (
						<li key={route.path} className="w-full">
							<Link
								href={route.path}
								className={`block w-full py-2 text-center ${isActive(
									route.path,
								)}`}
								onClick={() => setIsMenuOpen(false)} // Fechar o menu ao clicar no link
							>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
				<Button variant="secondary" className="g:hidden mx-auto my-8">
					Agende um horário
				</Button>
			</div>

			<Button variant="secondary" className="hidden lg:flex">
				Agende um horário
			</Button>
		</header>
	);
}

export default Header;
