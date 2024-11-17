import { ReactNode } from "react";
import { LayoutProvider } from "../context/LayoutProvider";
import "./DefaultLayout.scss";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<LayoutProvider>
			<div className="default-layout">
				{children}
			</div>
		</LayoutProvider>
	);
};