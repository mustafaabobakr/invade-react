import { memo, type ComponentPropsWithoutRef } from "react";

interface ArrowIconProps extends ComponentPropsWithoutRef<"svg"> {
	fill?: string;
	width?: number;
	height?: number;
}
function ArrowIconInner({ fill = "currentColor", width = 24, height = 24, ...props }: Readonly<ArrowIconProps>) {
	return (
		<svg
			data-testid="ArrowIcon"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke={fill}
			aria-hidden="true"
			width={width}
			height={height}
			{...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
		</svg>
	);
}

ArrowIconInner.displayName = "ArrowIcon";
const ArrowIcon = memo(ArrowIconInner);
export default ArrowIcon;
