import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import ContactForm from ".";

describe("home > components > Contact Form", () => {
	test("render component without errors", () => {
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

	test("validate fields with error", async () => {
		render(<ContactForm />);

		const name = screen.getByRole("textbox", {
			name: /nome/i,
		});

		fireEvent.change(name, { target: { value: "Frajola" } });
		fireEvent.blur(name);

		expect(
			await screen.findByText(/digite seu nome completo\./i),
		).toBeVisible();

		const email = screen.getByRole("textbox", {
			name: /e\-mail/i,
		});

		fireEvent.change(email, { target: { value: "teste" } });
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

	test("enable submit", async () => {
		render(<ContactForm />);

		const button = screen.getByRole("button", {
			name: /enviar/i,
		});
		expect(button).toBeDisabled();

		const name = screen.getByRole("textbox", {
			name: /nome/i,
		});
		await userEvent.type(name, "Namu Francisco");

		const email = screen.getByRole("textbox", {
			name: /e-?mail/i,
		});
		await userEvent.type(email, "teste@gmail.com");

		const phone = screen.getByRole("textbox", {
			name: /celular/i,
		});
		await userEvent.type(phone, "51999999999");

		expect(await screen.findByDisplayValue("(51) 99999-9999")).toBeVisible();

		const help = screen.getByRole("textbox", {
			name: /como podemos te ajudar\?/i,
		});
		await userEvent.type(help, "Teste ajuda");

		expect(button).toBeEnabled();

		await userEvent.click(button);
		expect(name).toHaveValue("");
	});
});
