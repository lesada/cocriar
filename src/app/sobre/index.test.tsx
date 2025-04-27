import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import About from "./page";

describe("about", () => {
	test("render about page without errors", async () => {
		render(<About />);

		const tag = screen.getByRole("heading", {
			name: /quem somos\?/i,
		});
		expect(tag).toBeVisible();

		const title = screen.getByRole("heading", {
			name: /a co\-criar leva seu propósito “movimentar positivamente a evolução de pessoas e organizações”, de forma coerente em suas abordagens de atuação\./i,
		});
		expect(title).toBeVisible();

		const paragraph = screen.getByText(
			/para isso, acreditamos que as melhores possibilidades de desenvolvimento são criadas através da colaboração e de permitir que as pessoas se encontrem, gerando novos saberes e novas soluções\./i,
		);
		expect(paragraph).toBeVisible();

		const secondSection = screen.getByText(
			/para isso, acreditamos que as melhores possibilidades de desenvolvimento são criadas através da colaboração e de permitir que as pessoas se encontrem, gerando novos saberes e novas soluções\./i,
		);
		expect(secondSection).toBeVisible();
	});
});
