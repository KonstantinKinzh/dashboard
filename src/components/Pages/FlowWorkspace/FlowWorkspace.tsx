import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,

	applyNodeChanges,
	applyEdgeChanges,
	addEdge,

	type Node,
	type Edge,
	type OnConnect,
	type OnNodesChange,
	type OnEdgesChange,
	type NodeTypes,
} from "@xyflow/react";
import { useState, useEffect, useCallback } from "react";
import { useLayout } from "@/components/Layout/context/LayoutContext";
import classes from "./FlowWorkspace.module.scss";


const initialNodes: Node[] = [
	{ id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
	{ id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];


export const FlowWorkspace = () => {
	//* Layout-context 
	const { setHeaderContent } = useLayout();

	//* Состояния
	const [nodes, setNodes] = useState<Node[]>(initialNodes);
	const [edges, setEdges] = useState<Edge[]>(initialEdges);

	//* Функции добавляющие интерактивность графам 
	const onNodesChange: OnNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes],
	);
	const onEdgesChange: OnEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges],
	);
	const onConnect: OnConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges],
	);

	//* Эффект добавляющий в header название страницы 
	useEffect(() => {
		setHeaderContent(<h1>Обработка данных</h1>)
	}, []);

	return (
		<ReactFlow
			style={{ width: "100%", height: "100vh" }}
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			fitView
		>
			<MiniMap />
			<Controls />
			<Background className={classes.background} />
		</ReactFlow>
	);
};