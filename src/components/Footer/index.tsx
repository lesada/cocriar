import Image from 'next/image'
import Link from 'next/link'
import FormEmail from './components/FormEmail'
import { footerSections } from './constants/footerSections'
import { legalLinks } from './constants/legalLinks'
import { socialMedia } from './constants/socialMedia'

function Footer() {
  return (
    <footer
      className="bg-blue-700 min-h-[440px] p-[28px] px-[40px] w-full lg:py-12 lg:px-[155px]"
      data-testid="footer"
    >
      <div className="flex flex-col gap-8 lg:gap-12 xl:flex-row xl:items-center">
        <FormEmail />

        <div className="grid gap-7 lg:grid-cols-3 lg:justify-between lg:w-full xl:pt-22 xl:pl-20">
          {footerSections.map((secao) => (
            <div
              key={secao.title}
              className="flex flex-col gap-3 text-center xl:text-start"
            >
              <p className="text-gold-100 font-bold font-inter text-lg">
                {secao.title}
              </p>

              <ul className="flex flex-col gap-3 text-center xl:max-w-[145px] xl:text-start">
                {secao.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-neutral-0 text-sm font-normal"
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

      <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12">
        <div className="flex justify-center gap-8 mt-7">
          {legalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-neutral-0 font-medium font-inter text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-7">
          {socialMedia.map((social, index) => (
            <Link key={index} href={social.href}>
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
  )
}

export default Footer
