import logo from "@/assets/logo.png";
import Image from "next/image";
import Button from "../Button";

function Header() {
  return (
    <header className="flex items-center gap-16 py-6 px-12 w-full border-b-1 border-neutral-100">
      <Image src={logo} alt="Co-criar" />

      <nav className="flex-1">
        <ul className="flex items-center flex-1 gap-3 font-inter text-lg leading-relaxed ">
          <li className="flex-1">Home</li>
          <li className="flex-1">Sobre</li>
          <li className="flex-1">Serviços</li>
          <li className="flex-1">Eventos</li>
          <li className="flex-1">Contato</li>
          <li className="flex-1">Blog</li>
        </ul>
      </nav>

      <Button variant="secondary">Agende um horário</Button>
    </header>
  );
}

export default Header;
