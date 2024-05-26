import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageLayout from "./layouts/PageLayout";
import ListPage from "./pages/ListPage/ListPage";
import DetailsPage from "./pages/DetailsPage";
import initReactQuery from "./libs/query";
import "./index.css";

const { persister, queryClient } = initReactQuery({});

const rootEl = document.getElementById("root") ?? document.body.appendChild(document.createElement("div"));

ReactDOM.createRoot(rootEl).render(
	<React.StrictMode>
		<PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
			<BrowserRouter>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<ListPage />} />
						<Route path="/list" element={<ListPage />} />
						<Route path="/details/:detailsId" element={<DetailsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</PersistQueryClientProvider>
	</React.StrictMode>
);
