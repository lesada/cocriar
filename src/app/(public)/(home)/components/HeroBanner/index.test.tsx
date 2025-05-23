import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import HeroBanner from ".";

describe("home > components > Hero Banner", () => {
	test("render hero without errors", async () => {
		render(<HeroBanner />);

		const title = screen.getByRole("heading", {
			name: /desenvolvimento pessoal e profissional para evoluir e crescer/i,
		});
		expect(title).toBeVisible();

		const button = screen.getByRole("button", {
			name: /agendar um horário/i,
		});
		expect(button).toBeVisible();
	});
});
