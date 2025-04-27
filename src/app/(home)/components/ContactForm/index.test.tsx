import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ContactForm from ".";

describe("home > components > Contact Form", () => {
	test("render component without errors", async () => {
		render(<ContactForm />);

		const title = screen.getByRole("heading", {
			name: /vamos juntos co\-criar inovação e desenvolvimento\?/i,
		});
		expect(title).toBeVisible();

		const firstField = screen.getByRole("textbox", {
			name: /nome/i,
		});
		expect(firstField).toBeVisible();
	});
});
