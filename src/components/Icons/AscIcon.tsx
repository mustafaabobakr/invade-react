import React, { memo, type ComponentPropsWithoutRef } from "react";

interface AscIconProps extends ComponentPropsWithoutRef<"svg"> {
	fill?: string;
	width?: number;
	height?: number;
}
const AscIcon: React.FC<Readonly<AscIconProps>> = ({
	fill = "currentColor",
	width = 12,
	height = 12,
	...props
}: Readonly<AscIconProps>) => {
	return (
		<svg
			data-testid="AscIcon"
			xmlns="http://www.w3.org/2000/svg"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			imageRendering="optimizeQuality"
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 512 421.65"
			width={width}
			height={height}
			{...props}>
			<path
				fillRule="nonzero"
				d="M383.01 379.71c11.57 0 20.97 9.4 20.97 20.97 0 11.57-9.4 20.97-20.97 20.97l-362.04-.44C9.4 421.21 0 411.81 0 400.24c0-11.57 9.4-20.97 20.97-20.97l362.04.44zm-90.97-238.93c-7.91 7.94-20.8 7.99-28.74.08-7.94-7.91-7.99-20.8-.08-28.74L369.33 5.98c7.91-7.94 20.79-7.99 28.73-.08l107.98 107.91c7.95 7.94 7.95 20.87 0 28.81-7.94 7.95-20.87 7.95-28.81 0l-73.12-73.11.32 206.4c0 11.2-9.1 20.3-20.3 20.3-11.2 0-20.29-9.1-20.29-20.3l-.32-206.63-71.48 71.5zM171.62 40.59c11.57 0 20.97 9.41 20.97 20.98 0 11.56-9.4 20.97-20.97 20.97l-150.65-.16C9.4 82.38 0 72.97 0 61.4c0-11.56 9.4-20.97 20.97-20.97l150.65.16zm41.33 170.71c11.57 0 20.97 9.4 20.97 20.97 0 11.57-9.4 20.97-20.97 20.97l-191.98-.23C9.4 253.01 0 243.61 0 232.04c0-11.56 9.4-20.97 20.97-20.97l191.98.23z"
			/>
		</svg>
	);
};

AscIcon.displayName = "AscIcon";
export default memo(AscIcon);
