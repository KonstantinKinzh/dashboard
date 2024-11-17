import { useLayout } from "../context/LayoutContext";
import "./Header.scss";

export const Header = () => {
	const { headerContent } = useLayout();

	return (
		<div className={"header"}>
			{headerContent}
		</div>
	);
};