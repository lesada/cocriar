import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ModalDeleteImage from ".";

describe("components > ModalDeleteImage", () => {
	it("returns null when base64 is null", () => {
		const { container } = render(
			<ModalDeleteImage
				base64={null}
				deleteImage={() => {}}
				onClose={() => {}}
			/>,
		);

		expect(container.firstChild).toBeNull();
	});

	it("renders image and buttons and calls handlers", () => {
		const base64 = "data:image/png;base64,AAA";
		const deleteImage = vi.fn();
		const onClose = vi.fn();

		render(
			<ModalDeleteImage
				base64={base64}
				deleteImage={deleteImage}
				onClose={onClose}
			/>,
		);

		const img = screen.getByAltText("Preview") as HTMLImageElement;
		expect(img).toBeTruthy();
		expect(img.getAttribute("src")).toContain(base64);

		const deleteBtn = screen.getByRole("button", { name: /Deletar imagem/i });
		const closeBtn = screen.getByRole("button", { name: /Fechar/i });

		fireEvent.click(deleteBtn);
		expect(deleteImage).toHaveBeenCalledTimes(1);

		fireEvent.click(closeBtn);
		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
