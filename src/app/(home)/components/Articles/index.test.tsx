import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Articles from ".";

describe("home > components > Articles", () => {
	test("render articles", async () => {
		render(<Articles />);

		const tag = screen.getByText("Blog Co-criar");

		expect(tag).toBeVisible();

		const titleFirstArticle = screen.getAllByText(
			"5 Conteúdos que você precisa ler em 2023",
		);

		expect(titleFirstArticle[0]).toBeVisible();
	});
});
