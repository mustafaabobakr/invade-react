import { useQuery, useQueryClient, type UseQueryOptions } from "@tanstack/react-query";
import { LIST_API_URL, QUERY_KEYS } from "@config";
import type { UniversityListResponse } from "@types";
import { slugify } from "@utils";

async function fetchMyList() {
	// try fetching from LIST_API_URL if failed get from /list.json
	try {
		const response = await fetch(LIST_API_URL);
		if (!response.ok) {
			return fetch("/list.json");
		}
		return response.json();
	} catch (error) {
		console.error("There was a problem with your fetch operation:", error);
	}
}

export function useListingData(options?: Partial<UseQueryOptions<UniversityListResponse>>) {
	const queryClient = useQueryClient();
	const query = useQuery<UniversityListResponse>({
		...options,
		queryKey: QUERY_KEYS.LIST,
		queryFn: fetchMyList,
	});

	const handleSort = (sort: "asc" | "desc") => {
		queryClient.setQueryData<UniversityListResponse | undefined>(QUERY_KEYS.LIST, (data) => {
			return data?.sort((a, b) => {
				if (sort === "asc") {
					return a.name.localeCompare(b.name);
				}
				return b.name.localeCompare(a.name);
			});
		});
	};
	const handleSearch = (search: string) => {
		queryClient.setQueryData<UniversityListResponse | undefined>(QUERY_KEYS.LIST, (data) => {
			if (!search || !data) {
				// refetch the data
				query.refetch();
			}
			return data?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		});
	};

	const handleDelete = (slug: string) => {
		queryClient.setQueryData<UniversityListResponse | undefined>(QUERY_KEYS.LIST, (data) => {
			return data?.filter((item) => slugify(item.name) !== slug);
		});
	};
	return {
		...query,
		handleSort,
		handleSearch,
		handleDelete,
	};
}

export function useUniversityData(detailsId?: string) {
	return useListingData({
		select: (data) => data?.filter((item) => slugify(item.name) === detailsId),
	});
}
