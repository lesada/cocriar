import iconFacebook from '@/assets/icons/facebook.png'
import iconTwitter from '@/assets/icons/instagram.png'
import iconInstagram from '@/assets/icons/twitter.png'

import Image from 'next/image'
import Link from 'next/link'
import FormEmail from './components/FormEmail'

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
    <footer className="bg-blue-700 min-h-[440px] p-[28px] px-[40px] w-full lg:py-12 lg:px-[155px]">
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
    </footer>
  )
}

export default Footer
