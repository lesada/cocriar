import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RichText from "./index";

describe("RichText", () => {
	it("should render the editor with initial content", () => {
		const initialValue = "<p>Initial content</p>";
		const onChange = vi.fn();

		render(<RichText value={initialValue} onChange={onChange} />);

		const editorContent = screen.getByText("Initial content");
		expect(editorContent).toBeInTheDocument();
	});

	it("should update the editor content when value prop changes", () => {
		const initialValue = "<p>Initial content</p>";
		const updatedValue = "<p>Updated content</p>";
		const onChange = vi.fn();

		const { rerender } = render(
			<RichText value={initialValue} onChange={onChange} />,
		);

		rerender(<RichText value={updatedValue} onChange={onChange} />);

		const updatedContent = screen.getByText("Updated content");
		expect(updatedContent).toBeInTheDocument();
	});

	it("should open modal edit link", async () => {
		const initialValue = "<p>Initial content</p>";
		const onChange = vi.fn();
		render(<RichText value={initialValue} onChange={onChange} />);
		const editorContent = screen.getByText("Initial content");
		expect(editorContent).toBeInTheDocument();

		const linkButton = screen.getByTestId("link-button");
		linkButton.click();
		const modal = await screen.findByTestId("edit-link-modal");
		expect(modal).toBeInTheDocument();
	});
});
