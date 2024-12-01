// React Router
import { createBrowserRouter } from "react-router-dom";

// Components
import { Layout } from "@/components/Layout/Layout";
import { Flow } from "@/components/widgets/Flow";
import { Images } from "@/components/Pages/images";
import { Docs } from "@/components/Pages/docs";
import { FlowWorkspace } from "@/components/Pages/FlowWorkspace";

// Paths
import { paths } from "./paths";

export const routes = createBrowserRouter([
	{
		path: paths.main,
		element: <Layout />,
		children: [

			{
				index: true,
				element: <Images />
			},

			{
				path: paths.images,
				element: <Images />
			},

			{
				path: paths.docs,
				element: <Docs />
			},

			{
				path: paths.flowWorkspace,
				element: (
					<Flow>
						<FlowWorkspace />
					</Flow>
				),
			},

		],
	},
]);