import { describe, test } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import ListPage from "./ListPage";
import { renderWithClient } from "tests/utils";

describe("ListPage", async () => {
	test("renders ListPage", async () => {
		renderWithClient(<ListPage />);

		expect(screen.getByTestId("Skeleton")).toBeInTheDocument();

		await waitFor(() => expect(screen.getByTestId("List")).toBeInTheDocument());
	});
});
