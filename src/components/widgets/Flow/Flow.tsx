import { type PropsWithChildren } from "react";
import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

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
			{children}
		</FlowWrapper>
	);
};