import { type ReactNode } from "react";
import { NavList } from "./NavList";
import "./Sidebar.scss";

export const Sidebar = ({ children }: { children?: ReactNode }) => {
	return (
		<div className={"sidebar"}>
			<NavList />
			{children}
		</div>
	);
};