import { useParams, useNavigate } from "react-router-dom";
import { useUniversityData } from "@config";
import { useMemo } from "react";
import { BackButton } from "@components/Buttons";

const DetailsPage = () => {
	const navigate = useNavigate();
	const { detailsId } = useParams();
	const { data } = useUniversityData(detailsId);

	console.log("detailsId:", detailsId);
	// select the item from useQuery data
	const card = useMemo(() => {
		return data?.[0];
	}, [data]);

	return (
		<>
			<section className={"py-3 rounded-md flex justify-between"}>
				<BackButton onClick={() => navigate(-1)} />
			</section>
			{card && (
				<article className={"flex flex-col gap-2 pk-8"}>
					<h1 className={"text-8xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl"}>{card.name}</h1>
					<p>{card.country}</p>
					<p>{card.alpha_two_code}</p>
					{card.web_pages && (
						<ul>
							{card.web_pages.map((page) => (
								<li key={page}>
									<a href={page}>{page}</a>
								</li>
							))}
						</ul>
					)}
				</article>
			)}
		</>
	);
};

DetailsPage.displayName = "DetailsPage";
export default DetailsPage;
