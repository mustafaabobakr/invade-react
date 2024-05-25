import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { slugify } from "@utils";
import { useListingData } from "@config";
import AscIcon from "@components/Icons/AscIcon";
import DescIcon from "@components/Icons/DescIcon";
import Skeleton from "@components/Skeleton/Skeleton";
import DeleteButton from "@components/Buttons/DeleteButton";

const ListPage = () => {
	const { data, isLoading, error, handleSearch, handleSort, handleDelete } = useListingData();
	const [sort, setSort] = useState<"asc" | "desc">("asc");
	const [searchValue, setSearchValue] = useState("");
	if (isLoading) {
		return <Skeleton count={36} />;
	}
	if (error) {
		return (
			<div data-testid="Error" className={"h-full flex-1 flex justify-center items-center"}>
				<h1 className={"text-3xl"}>Error: {error.message}</h1>
			</div>
		);
	}

	return (
		<article className={"flex flex-col gap-5 flex-1 h-full"}>
			<section className={"py-3 rounded-md flex flex-wrap justify-between"}>
				<aside>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search..."
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value);
							handleSearch(e.target.value);
						}}
					/>
				</aside>
				<aside>
					<div className="inline-flex rounded-md shadow-sm" role="group">
						<button
							type="button"
							title={"Sort ascending"}
							onClick={() => {
								setSort("asc");
								handleSort("asc");
							}}
							className={`inline-flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
								sort === "asc" ? "z-10 ring-2 ring-blue-700 text-blue-700" : ""
							}`}>
							<AscIcon className={"mie-1"} />
						</button>
						<button
							type="button"
							title={"Sort descending"}
							onClick={() => {
								setSort("desc");
								handleSort("desc");
							}}
							className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
								sort === "desc" ? "z-10 ring-2 ring-blue-700 text-blue-700" : ""
							}`}>
							<DescIcon className={"mie-1"} />
						</button>
					</div>
				</aside>
			</section>
			{data && data?.length > 0 ? (
				<motion.ul
					data-testid="List"
					data-sort={sort}
					data-length={data.length}
					className={"grid gap-4 grid-cols-list"}>
					<AnimatePresence initial={false}>
						{data?.map((item) => {
							const slug = slugify(item.name);
							return (
								<motion.li
									key={slug}
									data-testid="ListItem"
									data-slug={slug}
									className={
										"w-full h-[150px] p-4 bg-white rounded-md border-gray-100 hover:border-gray-400 border-2 flex flex-col justify-between items-start hover:shadow-md"
									}
									layout
									layoutId={slug}
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: {
											type: "none",
											bounce: 0,
											delay: 0.6,
										},
									}}
									exit={{
										opacity: 0,
										transition: {
											type: "none",
											bounce: 0,
											duration: 0.2,
										},
									}}>
									<Link to={`/details/${slug}`} className={"flex flex-col items-start gap-1"}>
										<h6 data-testid="ListItem_name" className={"text-lg leading-6 font-bold"}>
											{item.name}
										</h6>
										<small className={"text-xs"}>
											{item.country} - {item.alpha_two_code}
										</small>
									</Link>
									<footer className={" flex w-full items-center justify-between"}>
										<button
											type={"button"}
											className={"rounded-md text-blue-900 bg-blue-50/20 px-3 h-10 hover:bg-blue-100/30"}>
											<Link to={`/details/${slug}`}>Details</Link>
										</button>
										<DeleteButton
											onClick={(e) => {
												e.preventDefault();
												e.stopPropagation();
												handleDelete(slug);
											}}
										/>
									</footer>
								</motion.li>
							);
						})}
					</AnimatePresence>
				</motion.ul>
			) : (
				<section className={"flex-1 h-full flex flex-col gap-4 justify-center items-center"}>
					<p>No data found</p>
					<button
						type="button"
						className={"rounded-md text-blue-900 bg-blue-50/20 px-3 h-10 hover:bg-blue-100/30  ease-in-out"}
						onClick={() => {
							handleSearch("");
							setSearchValue("");
						}}>
						Refresh
					</button>
				</section>
			)}
		</article>
	);
};

ListPage.displayName = "ListPage";
export default ListPage;
