import { render, screen } from "@testing-library/react";
import { withNuqsTestingAdapter } from "nuqs/adapters/testing";
import { describe, expect, test } from "vitest";
import Artigos from "./page";

describe("artigos", () => {
	test("render all articles", async () => {
		render(<Artigos />, {
			wrapper: withNuqsTestingAdapter({ searchParams: "" }),
		});

		const titleCard = screen.getByText("Cybersegurança em 2023: Desafios");
		expect(titleCard).toBeVisible();
	});

	test("render only articles", async () => {
		render(<Artigos />, {
			wrapper: withNuqsTestingAdapter({
				searchParams: {
					category: "Tecnologia",
				},
			}),
		});

		const titleCard = screen.getByText("Cybersegurança em 2023: Desafios");
		expect(titleCard).toBeVisible();

		const titleOtherCard = screen.queryByText(
			"5 Conteúdos que você precisa ler em 2023",
		);

		expect(titleOtherCard).toBeNull();
	});
});
