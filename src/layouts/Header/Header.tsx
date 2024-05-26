import { memo, type ComponentPropsWithoutRef } from "react";
import { useListingData } from "@config";
import LastUpdate from "@components/LastUpdate/LastUpdate";
import styles from "./Header.module.css";
import IconButton from "@components/Buttons";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}
const Header = ({ ...props }: Readonly<HeaderProps>) => {
	const { refetch, isRefetching, isRefetchError, failureCount, isLoading } = useListingData();

	return (
		<header {...props} className={styles.header}>
			<aside className={"flex flex-wrap items-center"}>
				<IconButton
					type="button"
					data-error={isRefetchError}
					data-error-count={failureCount}
					disabled={isRefetching || isLoading}
					title={"Refetch from the server"}
					onClick={async () => refetch()}
					className={"bg-sky-50/60 hover:bg-sky-100 rounded-md"}>
					<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21.91,4.09a1,1,0,0,0-1.07.16L19.48,5.46A9.81,9.81,0,0,0,12,2a10,10,0,1,0,9.42,13.33,1,1,0,0,0-1.89-.66A8,8,0,1,1,12,4a7.86,7.86,0,0,1,6,2.78L16.34,8.25a1,1,0,0,0-.27,1.11A1,1,0,0,0,17,10h4.5a1,1,0,0,0,1-1V5A1,1,0,0,0,21.91,4.09Z"
							fill="#464646"
						/>
					</svg>
					<span className={"text-md pis-2 text-sky-950 flex flex-col gap-1 items-end"}>
						<span className={"text-sky-950"}>Refetch</span>
						<LastUpdate />
					</span>
				</IconButton>
			</aside>
			<aside>
				<a
					title="repo"
					href="https://github.com/mustafaabobakr/invade-react"
					target="_blank"
					rel="noopener noreferrer"
					className={"fill-slate-500 hover:fill-slate-900 transition-all ease-in-out"}>
					<svg viewBox="0 0 16 16" width={20} height={20}>
						<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
					</svg>
				</a>
			</aside>
		</header>
	);
};

Header.displayName = "Header";
export default memo(Header);
