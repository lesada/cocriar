import { fireEvent, render, screen } from "@testing-library/react";
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

	test("validation fields with error", async () => {
		render(<ContactForm />);

		const name = screen.getByRole("textbox", {
			name: /nome/i,
		});

		fireEvent.change(name, { target: { value: "Érica" } });
		fireEvent.blur(name);

		expect(
			await screen.findByText(/digite seu nome completo\./i),
		).toBeVisible();

		const email = screen.getByRole("textbox", {
			name: /e\-mail/i,
		});

		fireEvent.change(email, { target: { value: "erica" } });
		fireEvent.blur(email);

		expect(
			await screen.findByText(/digite um e\-mail válido\./i),
		).toBeVisible();

		const phone = screen.getByRole("textbox", {
			name: /celular/i,
		});

		fireEvent.change(phone, { target: { value: "519999" } });
		fireEvent.blur(phone);

		expect(await screen.findByText(/digite um número válido/i)).toBeVisible();

		const help = screen.getByRole("textbox", {
			name: /como podemos te ajudar\?/i,
		});
		fireEvent.blur(help);

		expect(await screen.findByText(/digite sua dúvida/i)).toBeVisible();
	});
});
