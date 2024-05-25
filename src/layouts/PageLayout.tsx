import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));

const PageLayout = () => {
	return (
		<>
			<Suspense fallback={<header className={"h-[var(--header-height)] w-full"} />}>
				<Header />
			</Suspense>
			<main className={"flex flex-col flex-1 pi-[var(--container-padding-x)] py-8"}>
				<Outlet />
			</main>
			<Suspense>
				<Footer />
			</Suspense>
		</>
	);
};

PageLayout.displayName = "PageLayout";
export default PageLayout;
