import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { server } from "../mocks/server";
import { getSummary } from "./get-summary";
import { summaryMock } from "./mock";

describe("getSummary", () => {
	beforeAll(() => {
		server.listen();
	});

	afterAll(() => server.close());

	it("should fetch summary data from API", async () => {
		const result = await getSummary();
		expect(result).toEqual(summaryMock);
	});
});
