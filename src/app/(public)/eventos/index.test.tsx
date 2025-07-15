import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Eventos from "./page";

describe("eventos", () => {
	test("render eventos", async () => {
		render(<Eventos />);

		const titleCard = screen.getByText("Cybersegurança em 2023: Desafios");
		expect(titleCard).toBeVisible();
	});
});
