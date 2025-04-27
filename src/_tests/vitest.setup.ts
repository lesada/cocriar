import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.mock("embla-carousel-react", () => {
	return {
		__esModule: true,
		default: vi.fn(),
		useEmblaCarousel: vi.fn().mockReturnValue([vi.fn(), { on: vi.fn() }]),
	};
});

afterEach(() => {
	cleanup();
});

vi.mock("next/font/google", () => ({
	Inter: () => ({ className: "inter-mock", variable: "--font-inter" }),
	Poppins: () => ({ className: "poppins-mock", variable: "--font-poppins" }),
}));

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		push: vi.fn(),
		replace: vi.fn(),
		refresh: vi.fn(),
		back: vi.fn(),
		forward: vi.fn(),
		prefetch: vi.fn(),
	}),
}));
