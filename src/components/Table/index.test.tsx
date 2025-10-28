import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Table from ".";

describe("components > Table", () => {
	it("renders Container and children", () => {
		render(
			<Table.Container>
				<Table.Header>
					<th>Head</th>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Cell A</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Container>,
		);

		const table = screen.getByRole("table");
		expect(table).toBeInTheDocument();

		expect(screen.getByText("Head")).toBeInTheDocument();
		expect(screen.getByText("Cell A")).toBeInTheDocument();
	});
});
