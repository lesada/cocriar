"use client";

import logo from "@/assets/logo.png";
import { routes } from "@/routes";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../Button";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const isActive = (path: string) =>
		pathname === path ? "text-blue-800 font-bold" : "text-neutral-600";

	return (
		<header className="flex items-center justify-center gap-16 py-6 lg:px-12 w-full border-b-1 border-neutral-100 lg:justify-start">
			<div className="w-10 lg:hidden" />
			<Image
				src={logo}
				alt="Co-criar"
				className="shrink-0"
				width={120}
				height={50}
			/>
			<nav className="hidden lg:flex flex-1">
				<ul className="flex items-center flex-1 gap-3 font-inter text-lg leading-relaxed">
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
				className="lg:hidden flex items-center justify-center p-2"
				onClick={toggleMenu}
				type="button"
			>
				<MenuIcon />
			</button>

			<div
				className={clsx(
					"lg:hidden absolute top-25 left-0 right-0 bg-white shadow-lg py-4 px-6 transform transition-all duration-300",
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
				<Button variant="secondary" className="my-8 mx-auto g:hidden">
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
