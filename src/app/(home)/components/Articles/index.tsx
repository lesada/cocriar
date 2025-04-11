"use client";

import Card from "@/components/Card";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { articles } from "./constants";

function Articles() {
  const router = useRouter();

  return (
    <Section tag="Blog Co-criar">
      <div className="flex gap-8 flex-wrap justify-center">
        {articles.slice(0, 3).map((article) => (
          <Card
            image={article.image}
            subtitle={article.subtitle}
            tag={article.tag}
            title={article.title}
            key={article.slug}
            onClick={() => router.push(`articles/${article.slug}`)}
            className="cursor-pointer"
          />
        ))}
      </div>
      <Link
        href="/artigos"
        className="ml-auto font-bold text-lg w-fit flex items-center gap-0.5 text-blue-950 mt-8"
      >
        Ver mais artigos
        <ArrowRight />
      </Link>
    </Section>
  );
}

export default Articles;
