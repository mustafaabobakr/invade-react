import { http, HttpResponse } from "msw";
import { LIST_API_URL } from "../src/config/index";
import list from "./list.json";

export const handlers = [
	http.get(LIST_API_URL, () => {
		return HttpResponse.json(list);
	}),
	http.get("/list.json", () => {
		return HttpResponse.json(list);
	}),
];
