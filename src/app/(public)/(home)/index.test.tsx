import { renderWithClient } from "@/_tests/utils";
import { server } from "@/api/mocks/server";
import { afterAll, beforeAll, describe, test } from "vitest";
import Home from "./page";

describe("home ", () => {
	beforeAll(() => {
		server.listen();
	});

	afterAll(() => server.close());
	
	test("render home", async () => {
		renderWithClient(<Home />);
	});
});
