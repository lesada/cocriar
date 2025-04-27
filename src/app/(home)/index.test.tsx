import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Home from "./page";

describe("home ", () => {
	test("render home", async () => {
		render(<Home />);
	});
});
