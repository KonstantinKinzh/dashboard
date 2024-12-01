import { type PropsWithChildren } from "react";
import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
import classes from "./Flow.module.scss";

const FlowWrapper = ({ children }: PropsWithChildren) => {
	return (
		<ReactFlowProvider>
			{children}
		</ReactFlowProvider>
	);
};

export const Flow = ({ children }: PropsWithChildren) => {
	return (
		<FlowWrapper>
			<ReactFlow style={{width: "100%", height: "100vh"}}>
				{children}
			</ReactFlow>
		</FlowWrapper>
	);
};