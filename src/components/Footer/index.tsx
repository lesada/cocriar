import logo from '@/assets/cocriar-icon-footer.png'
import iconArrowRight from '@/assets/icons/arrow-right.png'
import iconFacebook from '@/assets/icons/facebook.png'
import iconTwitter from '@/assets/icons/instagram.png'
import iconInstagram from '@/assets/icons/twitter.png'

import Image from 'next/image'
import Link from 'next/link'

const footerSections = [
  {
    title: 'Soluções',
    links: [
      { name: 'Para Você', path: '/' },
      { name: 'Para sua empresa', path: '/' },
      { name: 'Eventos', path: '/' }
    ]
  },
  {
    title: 'Sobre',
    links: [
      { name: 'A Cocriar', path: '/' },
      { name: 'Letiene Ferreira', path: '/' }
    ]
  },
  {
    title: 'Help',
    links: [
      { name: 'FAQs', path: '/' },
      { name: 'Contato', path: '/' }
    ]
  }
]

function Footer() {
  return (
    <footer className="bg-blue-700 min-h-[440px] p-[28px] px-[40px] fixed bottom-0">
      <div className="flex flex-col items-center gap-7">
        <div className="flex flex-col items-center gap-5">
          <Image src={logo} alt="Logotipo Co-criar" width={80} height={80} />

          <p className="text-neutral-0 font-inter font-bold text-2xl leading-[120%] text-center">
            Inscreva-se e acompanhe nosso conteúdo na íntegra
          </p>

          <div className="flex border-b border-gold-100">
            <input
              className="h-[50px] text-neutral-0 bg-transparent placeholder:text-base placeholder:font-inter outline-none m-0"
              type="email"
              placeholder="Endereço de e-mail"
            />
            <button
              type="button"
              aria-label="Enviar e-mail"
              className="bg-gold-100 h-[50px] w-[50px] rounded-t-lg flex flex-col items-center justify-center cursor-pointer font-medium"
            >
              <Image src={iconArrowRight} alt="" width={20} height={20} />
            </button>
          </div>
        </div>

        {footerSections.map((secao) => (
          <div key={secao.title} className="flex flex-col items-center">
            <p className="text-gold-100 font-bold font-inter text-lg">
              {secao.title}
            </p>

            <ul className="text-center">
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

        <div>
          <div className="flex gap-8">
            <Link
              href={'/'}
              className="text-neutral-0 font-medium font-inter text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href={'/'}
              className="text-neutral-0 font-medium font-inter text-sm"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex gap-5 justify-center mt-6">
            <Link href={'/'}>
              <Image src={iconFacebook} alt="" width={9} height={19} />
            </Link>
            <Link href={'/'}>
              <Image src={iconTwitter} alt="" width={16} height={21} />
            </Link>
            <Link href={'/'}>
              <Image src={iconInstagram} alt="" width={22} height={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
