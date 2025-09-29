import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { updateArticle } from "../update-article";

vi.mock("@/api", () => ({
	api: {
		patch: vi.fn(),
	},
}));

describe("updateArticle", () => {
	const params = {
		id: "123",
		title: "Updated Title",
		image_url: "http://example.com/image.png",
		category: "Tech",
		content: "Updated content",
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.patch with correct URL and payload", async () => {
		(api.patch as Mock).mockResolvedValueOnce({});
		await updateArticle(params);
		expect(api.patch).toHaveBeenCalledWith(`/articles/${params.id}`, {
			category: params.category,
			content: params.content,
			image_url: params.image_url,
			title: params.title,
		});
	});

	it("should throw and log error if api.patch fails", async () => {
		const error = new Error("Network error");
		(api.patch as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(updateArticle(params)).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error updating article:", error);
		consoleSpy.mockRestore();
	});
});
