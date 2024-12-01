import { type CSSProperties, type PropsWithChildren, type ReactNode } from "react";
import { classNames } from "@/utils/classNames";
import classes from "./Modal.module.scss";

interface IPropsHeader {
	style?: CSSProperties;
	className?: string;
	title?: string;
	subTitle?: string;
	button?: ReactNode;
};

export const Header = ({ style, className, title, subTitle, button, children }: PropsWithChildren<IPropsHeader>) => {
	return (
		<>
			{!children &&
				<div style={style} className={classNames(classes.header, className ? className : "")}>
					{title &&
						<div className={classes.titleWrapp}>
							<h3 className={classes.title}>{title}</h3>
							{subTitle && <p className={classes.subTitle}>{subTitle}</p>}
						</div>
					}

					{button}
				</div>
			}
			{children}
		</>
	);
};