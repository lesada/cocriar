import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Loader from ".";

describe("components > Loader", () => {
	test("render component", () => {
		render(<Loader />);

		expect(screen.getByTestId("loader")).toBeInTheDocument();
	});
});
