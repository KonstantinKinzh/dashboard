import { Link } from "react-router-dom";
import { svgList } from "./svgList";
import classes from "./NavList.module.scss";

export const NavList = () => {
	return (
			<div className={classes.navList}>
				{svgList.map((svg) => (
					<Link key={svg.id} to={svg.path}>
						{svg.svgIcon}
					</Link>
				))}
			</div>
		);
};