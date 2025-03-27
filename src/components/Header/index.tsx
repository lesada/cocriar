"use client";

import logo from "@/assets/logo.png";
import { routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button";

function Header() {
  const pathname = usePathname(); // Obtendo o caminho atual

  const isActive = (path: string) =>
    pathname === path ? "text-blue-500" : "text-neutral-800"; // Altere para as cores que desejar

  return (
    <header className="flex items-center gap-16 py-6 px-12 w-full border-b-1 border-neutral-100">
      <Image src={logo} alt="Co-criar" />

      <nav className="flex-1">
        <ul className="flex items-center flex-1 gap-3 font-inter text-lg leading-relaxed ">
          {routes.map((route) => (
            <li key={route.path} className="flex-1">
              <Link href={route.path} className={isActive(route.path)}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button variant="secondary">Agende um horário</Button>
    </header>
  );
}

export default Header;
