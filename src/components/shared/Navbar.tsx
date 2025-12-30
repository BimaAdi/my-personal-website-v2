import { Link, useLocation } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="sticky top-0 z-10 bg-primary flex justify-between p-4 text-white">
			<h1 className="text-xl font-bold">
				<Link to="/">Bima Adi</Link>
			</h1>
			<ul className="flex justify-end gap-2">
				<li className={twMerge(location.pathname === "/" ? "underline" : "")}>
					<Link to="/">Home</Link>
				</li>
				<li
					className={twMerge(location.pathname === "/blogs" ? "underline" : "")}
				>
					<Link to="/blogs">Blogs</Link>
				</li>
			</ul>
		</nav>
	);
};
