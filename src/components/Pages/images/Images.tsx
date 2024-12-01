import { useEffect } from "react";
import { useLayout } from "@/components/Layout/context/LayoutContext";
import classes from "./Images.module.scss";

export const Images = () => {
	const { setHeaderContent } = useLayout();

	useEffect(() => {
		setHeaderContent(<h1>Изображения</h1>)
	}, []);

	return (
		<div className={classes.images}>
			<h1>Images</h1>
		</div>
	);
};