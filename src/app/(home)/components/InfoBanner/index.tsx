import owner from "@/assets/owner.png";
import Section from "@/components/Section";
import Image from "next/image";

function InfoBanner() {
  return (
    <Section tag="Por que a co-criar?" className="w-full">
      <div className="flex flex-col gap-10 max-w-[1440px] items-center md:flex-row md:items-start mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-4xl">
            Nosso proposito é movimentar e evoluir
          </h2>

          <p className="font-inter text-neutral-700 text-lg leading-8">
            A Co-criar leva seu propósito “movimentar positivamente a evolução
            de pessoas e organizações”, de forma coerente em suas abordagens de
            atuação. <br />
            Para isso, acreditamos que as melhores possibilidades de
            desenvolvimento são criadas através da colaboração e de permitir que
            as pessoas se encontrem, gerando novos saberes e novas soluções.{" "}
            <br />
            Estimular a cocriação de alternativas contribui na resolução de
            situações complexas.
          </p>

          <button
            type="button"
            className="w-full bg-blue-800 font-semibold text-white text-sm h-14 rounded-3xl mt-3 md:max-w-72 lg:text-base lg:mt-8"
          >
            Saiba Mais
          </button>
        </div>

        <Image
          src={owner}
          alt=""
          className="flex flex-1 shrink-0 lg:basis-md"
        />
      </div>
    </Section>
  );
}

export default InfoBanner;
