import type { ComponentPropsWithoutRef } from "react";
import ArrowIcon from "@components/Icons/ArrowIcon";
import IconButton from "../IconButton";

interface BackButtonProps extends ComponentPropsWithoutRef<"button"> {}
const BackButton = ({ ...props }: Readonly<BackButtonProps>) => {
	return (
		<IconButton data-testid="BackButton" {...props}>
			<ArrowIcon className={"fill-slate-500"} width={24} height={24} />
		</IconButton>
	);
};

BackButton.displayName = "BackButton";
export default BackButton;
