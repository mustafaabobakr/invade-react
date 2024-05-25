import { memo, type ComponentPropsWithoutRef } from "react";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {}
const IconButton = ({ ...props }: Readonly<IconButtonProps>) => {
	return (
		<button
			type={"button"}
			data-testid="IconButton"
			{...props}
			className={`transition-background ease-in-out min-w-12 h-10 flex items-center justify-center rounded-lg p-3 ${
				props.className ? props.className : ""
			}`}>
			{props.children}
		</button>
	);
};

IconButton.displayName = "IconButton";
export default memo(IconButton);
