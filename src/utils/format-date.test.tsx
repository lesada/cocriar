import { describe, expect, it } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate", () => {
	it("formats a standard date correctly", () => {
		const date = new Date(2023, 4, 15); // May 15, 2023
		expect(formatDate(date)).toBe("15/05/2023");
	});

	it("formats single-digit days and months with leading zeros", () => {
		const date = new Date(2023, 0, 5); // January 5, 2023
		expect(formatDate(date)).toBe("05/01/2023");
	});

	it("formats the last day of the year", () => {
		const date = new Date(2022, 11, 31); // December 31, 2022
		expect(formatDate(date)).toBe("31/12/2022");
	});

	it("formats the first day of the year", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		expect(formatDate(date)).toBe("01/01/2022");
	});

	it("formats leap year dates", () => {
		const date = new Date(2020, 1, 29); // February 29, 2020
		expect(formatDate(date)).toBe("29/02/2020");
	});
});
