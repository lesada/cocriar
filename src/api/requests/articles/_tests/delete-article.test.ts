import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { deleteArticle } from "../delete-article";

vi.mock("@/api", () => ({
	api: {
		delete: vi.fn(),
	},
}));

describe("deleteArticle", () => {
	const id = "123";

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.delete with correct URL", async () => {
		(api.delete as Mock).mockResolvedValueOnce({});
		await deleteArticle(id);
		expect(api.delete).toHaveBeenCalledWith(`/articles/${id}`);
	});

	it("should throw and log error if api.delete fails", async () => {
		const error = new Error("Network error");
		(api.delete as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(deleteArticle(id)).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error deleting article:", error);
		consoleSpy.mockRestore();
	});
});
