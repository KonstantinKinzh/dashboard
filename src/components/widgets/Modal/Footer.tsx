import { type CSSProperties, type PropsWithChildren } from "react";
import { classNames } from "@/utils/classNames";
import classes from "./Modal.module.scss";

type TBtnsList = {
	id: string;
	name: string;
	className?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
};

interface IPropsFooter {
	style?: CSSProperties;
	className?: string;
	btnsList?: TBtnsList[];
};

export const Footer = ({ style, className, children, btnsList }: PropsWithChildren<IPropsFooter>) => {
	return (
		<div style={style} className={classNames(classes.footer, className ? className : "")}>
			{!children &&
				<>
					{btnsList?.map((btn) => (
						<button
							id={btn.id}
							className={classNames(classes.btn, btn.className ? btn.className : "")}
							onClick={btn.onClick}
							type={btn.type}
						>
							{btn.name}
						</button>
					))}
				</>
			}
			{children}
		</div>
	);
};