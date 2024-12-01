import { type PropsWithChildren } from "react";
import classes from "./CrosSvg.module.scss";

interface IPropsCrosSvg {
	width?: number;
	height?: number;
	color?: string;
};

export const CrosSvg = ({ width = 30, height = 30, color="#212121" }: PropsWithChildren<IPropsCrosSvg>) => {
	return (
		<svg className={classes.crosSvg} version="1.0" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
			<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
				<path d="M1253 3925 c-51 -22 -82 -87 -68 -142 4 -19 201 -223 603 -626 l597 -597 -603 -603 -602 -602 0 -54 c0 -47 4 -57 34 -87 30 -30 40 -34 87 -34 l54 0 602 602 603 603 603 -603 602 -602 54 0 c47 0 57 4 87 34 30 30 34 40 34 87 l0 54 -602 602 -603 603 603 603 602 602 0 54 c0 47 -4 57 -34 87 -30 30 -40 34 -87 34 l-54 0 -602 -602 -603 -603 -593 592 c-325 325 -602 596 -614 602 -29 14 -61 13 -100 -4z" />
			</g>
		</svg>
	);
};