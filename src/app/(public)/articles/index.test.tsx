import { render, screen } from "@testing-library/react";
import { withNuqsTestingAdapter } from "nuqs/adapters/testing";
import { describe, expect, test } from "vitest";
import Articles from "./page";

describe("articles", () => {
	test("render all articles", async () => {
		render(<Articles />, {
			wrapper: withNuqsTestingAdapter({ searchParams: "" }),
		});

		const titleCard = screen.getByText("Cybersegurança em 2023: Desafios");
		expect(titleCard).toBeVisible();
	});

	test("render only articles", async () => {
		render(<Articles />, {
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
