import DeleteIcon from "@components/Icons/DeleteIcon";
import type { ComponentPropsWithoutRef } from "react";
import IconButton from "../IconButton";

interface DeleteButtonProps extends ComponentPropsWithoutRef<"button"> {}
const DeleteButton: React.FC<Readonly<DeleteButtonProps>> = ({ ...props }: Readonly<DeleteButtonProps>) => {
	return (
		<IconButton
			data-testid="DeleteButton"
			{...props}
			className={`bg-red-50/50 hover:bg-red-100 transition-all ease-in-out w-10 h-10 flex items-center justify-center rounded-lg p-0 ${
				props.className ? props.className : ""
			}`}>
			<DeleteIcon width={14} height={14} />
		</IconButton>
	);
};

DeleteButton.displayName = "DeleteButton";
export default DeleteButton;
