import { renderHook, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { createWrapper } from "./utils";
import { LIST_API_URL, useListingData } from "@config";
import list from "../../mocks/list.json";

describe("query hook", () => {
	test("successful query hook", async () => {
		const { result } = renderHook(() => useListingData(), {
			wrapper: createWrapper(),
		});

		await waitFor(() => expect(result.current.isSuccess).toBe(true));

		expect(result.current.data?.length).toBe(list.length);
	});

	test("failure query hook", async () => {
		// msw will intercept the request and return a 500 status code
		server.use(
			http.get(LIST_API_URL, () => {
				return new HttpResponse("Internal Server Error", {
					status: 500,
				});
			})
		);

		const { result } = renderHook(() => useListingData(), {
			wrapper: createWrapper(),
		});

		await waitFor(() => expect(result.current.isError).toBe(true));

		expect(result.current.error).toBeDefined();
	});
});
