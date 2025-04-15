import heroImage from '@/assets/hero-cocriar.png'
import Image from 'next/image'

function HeroBanner() {
  return (
    <section>
      <div>
        <span>Co-criar desenvolvimento</span>
        <h1>Desenvolvimento Pessoal e Profissional para evoluir e crescer</h1>
        <p>
          A Co-criar leva seu propósito “movimentar positivamente a evolução de
          pessoas e organizações”, de forma coerente em suas abordagens de
          atuação.
        </p>
        <button type="button">Agendar um horário</button>
      </div>

      <Image src={heroImage} alt="" />
    </section>
  )
}

export default HeroBanner
