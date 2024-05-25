import { http, HttpResponse } from "msw";
import { LIST_API_URL } from "../config/index";
import list from "./list.json";

export const handlers = [
	http.get(LIST_API_URL, () => {
		return HttpResponse.json({});
	}),
	http.get("/list.json", () => {
		return HttpResponse.json({});
	}),
];
