import { ReactNode } from "react";
import { useLayoutContext } from "./useLayoutContext";
import { LayoutContext } from "./LayoutContext";

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
	const defaultContext = useLayoutContext();

	return (
		<LayoutContext.Provider value={defaultContext}>
			{children}
		</LayoutContext.Provider>
	);
};