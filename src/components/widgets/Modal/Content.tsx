import { type CSSProperties, type PropsWithChildren, type ReactNode } from "react";
import { classNames } from "@/utils/classNames";
import classes from "./Modal.module.scss";

type TInputList = {
	id?: string;
	placeholder?: string;
};

interface IPorpsContent {
	style?: CSSProperties;
	className?: string;
	inputList?: TInputList[];
	childrenInner?: ReactNode;
};

export const Content = ({ style, className, inputList, children, childrenInner }: PropsWithChildren<IPorpsContent>) => {
	return (
		<>
			{!children &&
				<div style={style} className={classNames(classes.content, className ? className : "")}>
					{inputList?.map((input) => (
						<input
							id={input.id}
							className={classes.input}
							placeholder={input.placeholder}
							type="text"
						/>
					))}

					{childrenInner}
				</div>
			}
			{children}
		</>
	);
};