import { DefaultLayout } from "./DefaultLayout";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router";

export const Layout = () => {
	return (
		<DefaultLayout>
			<Header />
			<Sidebar />
			<main>
				<Outlet />
			</main>
		</DefaultLayout>
	);
};