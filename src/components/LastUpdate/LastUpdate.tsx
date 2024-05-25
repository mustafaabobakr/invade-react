import { useState, useEffect, memo } from "react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

import { useListingData } from "@config";

const LastUpdate = () => {
	const { dataUpdatedAt } = useListingData();
	const [formatDate, setFormatDate] = useState(() => formatDistanceToNow(dataUpdatedAt));

	useEffect(() => {
		const interval = setInterval(() => {
			setFormatDate(() => formatDistanceToNow(dataUpdatedAt));
		}, 1000);
		return () => clearInterval(interval);
	}, [dataUpdatedAt]);

	return <small className={"text-[9px] font-bold"}>last refresh: {formatDate}</small>;
};

LastUpdate.displayName = "LastUpdate";

export default memo(LastUpdate);
