import { renderWithClient } from "@/_tests/utils";
import { server } from "@/api/mocks/server";
import { articlesMock } from "@/api/requests/articles/mock";
import { screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import Articles from ".";

describe("home > components > Articles", () => {
		beforeAll(() => {
		server.listen();
	});

	afterAll(() => server.close());
	
	test("render articles", async () => {
		renderWithClient(<Articles />);

		const tag = screen.getByText("Blog Co-criar");

		expect(tag).toBeVisible();

		const titleFirstArticle = await screen.findAllByText(
			articlesMock.articles[0].title,
		);

		expect(titleFirstArticle[0]).toBeVisible();
	});
});
