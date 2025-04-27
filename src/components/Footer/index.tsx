import Image from "next/image";
import Link from "next/link";
import FormEmail from "./components/FormEmail";
import { footerSections } from "./constants/footerSections";
import { legalLinks } from "./constants/legalLinks";
import { socialMedia } from "./constants/socialMedia";

function Footer() {
	return (
		<footer
			className="bg-blue-700 p-7 px-10 lg:px-40 lg:py-12 w-full min-h-110"
			data-testid="footer"
		>
			<div className="flex xl:flex-row flex-col xl:items-center gap-8 lg:gap-12">
				<FormEmail />

				<div className="lg:justify-between gap-7 grid lg:grid-cols-3 xl:pt-22 xl:pl-20 lg:w-full">
					{footerSections.map((secao) => (
						<div
							key={secao.title}
							className="flex flex-col gap-3 text-center xl:text-start"
						>
							<p className="font-inter font-bold text-gold-100 text-lg">
								{secao.title}
							</p>

							<ul className="flex flex-col gap-3 xl:max-w-36 text-center xl:text-start">
								{secao.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.path}
											className="font-normal text-neutral-0 text-sm hover:underline hover:underline-offset-4"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex lg:flex-row flex-col lg:justify-between items-center mt-12">
				<div className="flex justify-center gap-8 mt-7">
					{legalLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="font-inter font-medium text-neutral-0 text-sm hover:underline hover:underline-offset-5"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="flex justify-center gap-8 mt-7">
					{socialMedia.map((social) => (
						<Link key={social.alt} href={social.href}>
							<Image
								src={social.src}
								alt={social.alt}
								width={social.width}
								height={social.height}
							/>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
