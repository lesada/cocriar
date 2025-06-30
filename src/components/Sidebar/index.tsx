"use client";

import logo from "@/assets/logo.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "./constants";

function Sidebar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const activeClass = (path: string) =>
		pathname === path ? "bg-blue-100" : "";

	return (
		<nav className="top-0 z-50 sticky flex flex-col justify-center items-center gap-16 bg-neutral-0 px-4 py-6 border-neutral-100 border-r-1 w-[18rem] h-screen">
			<div className="flex items-center gap-4">
				<button
					className="flex justify-center items-center p-2"
					onClick={toggleMenu}
					type="button"
				>
					<Icon icon="material-symbols:menu-rounded" width={32} height={32} />
				</button>
				<Image
					src={logo}
					alt="Co-criar"
					className="shrink-0"
					width={120}
					height={50}
				/>
				<div className="p-2 w-8" />
			</div>

			<ul className="flex flex-col flex-1 items-center gap-1 w-full font-inter text-lg leading-relaxed">
				{routes.map((route) => (
					<li key={route.path} className="w-full">
						<Link
							href={route.path}
							className={`flex items-center gap-2 px-6 py-4 rounded-lg w-full ${activeClass(route.path)}`}
						>
							<Icon icon={route.icon} width={24} height={24} />

							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Sidebar;
