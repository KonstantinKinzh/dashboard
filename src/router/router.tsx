// React Router
import { createBrowserRouter } from "react-router-dom";

// Components
import { Layout } from "@/components/Layout/Layout";
import { Images } from "@/components/Pages/images";
import { Docs } from "@/components/Pages/docs";

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

		],
	},
]);