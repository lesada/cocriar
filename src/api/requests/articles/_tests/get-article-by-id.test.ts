import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { getArticleById } from "../get-article-by-id";

vi.mock("@/api", () => ({
	api: {
		get: vi.fn(),
	},
}));

describe("getArticleById", () => {
	const id = "123";

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.get with correct URL", async () => {
		const mockResponse = { data: { id, title: "Test Article" } };
		(api.get as Mock).mockResolvedValueOnce(mockResponse);
		const result = await getArticleById({ id });
		expect(api.get).toHaveBeenCalledWith(`/articles/${id}`);
		expect(result).toEqual(mockResponse.data);
	});
});
