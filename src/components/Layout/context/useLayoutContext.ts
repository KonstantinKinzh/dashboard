import { useState, useMemo, type ReactNode } from "react";

export const useLayoutContext = () => {
	const [headerContent, setHeaderContent] = useState<ReactNode | null>(null);

	const defaultContext = useMemo(() => ({
		headerContent: headerContent,
		setHeaderContent: setHeaderContent,
	}), [headerContent]);

	return defaultContext;
};