import { renderWithClient } from "@/_tests/utils";
import { server } from "@/api/mocks/server";
import { screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import Articles from "./page";

describe("articles", () => {
	beforeAll(() => {
		server.listen();
	});

	afterAll(() => server.close());

	test("render all articles", async () => {
		renderWithClient(<Articles />, new URLSearchParams({ category: "" }));

		const titleCard = await screen.findAllByText("Article title");
		expect(titleCard[0]).toBeVisible();
	});

	test("render only articles", async () => {
		const search = new URLSearchParams({ category: "health" });
		renderWithClient(<Articles />, search);
		const titleCard = await screen.findAllByText("Updated title");
		expect(titleCard[0]).toBeVisible();

		const titleOtherCard = screen.queryByText("Article title");

		expect(titleOtherCard).toBeNull();
	});
});
