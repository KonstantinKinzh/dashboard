import React, {
	useContext,
	createContext,
	type Dispatch,
	type SetStateAction,
	type ReactNode
} from "react";

interface ILayoutContext {
	headerContent: ReactNode;
	setHeaderContent: Dispatch<SetStateAction<ReactNode>>;
};

const initLayoutContext: ILayoutContext = {
	headerContent: null,
	setHeaderContent: () => { },
};

export const LayoutContext = createContext(initLayoutContext);

export const useLayout = () => useContext(LayoutContext);