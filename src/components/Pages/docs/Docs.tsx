import { useEffect } from "react";
import { useLayout } from "@/components/Layout/context/LayoutContext";
import classes from "./Docs.module.scss";

export const Docs = () => {
	const { setHeaderContent } = useLayout();

	useEffect(() => {
		setHeaderContent(<h1>Документы</h1>)
	}, []);

	return (
		<div className={classes.docs}>
			<h1>Документы</h1>
		</div>
	);
};