import { useEffect } from "react";
import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";
import { useLayout } from "@/components/Layout/context/LayoutContext";
import classes from "./FlowWorkspace.module.scss";

export const FlowWorkspace = () => {
	const { setHeaderContent } = useLayout();

	useEffect(() => {
		setHeaderContent(<h1>Обработка данных</h1>)
	}, []);

	return (
		<ReactFlow style={{ width: "100%", height: "100vh" }}>
			<MiniMap />
			<Controls />
			<Background className={classes.background} />
		</ReactFlow>
	);
};