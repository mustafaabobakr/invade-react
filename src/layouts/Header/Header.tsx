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
		</header>
	);
};

Header.displayName = "Header";
export default memo(Header);
