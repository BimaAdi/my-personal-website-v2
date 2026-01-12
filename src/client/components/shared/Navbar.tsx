import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { useI8nStore } from "@/client/store/i8n";

export const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const lang = useI8nStore((state) => state.lang);
	const setLang = useI8nStore((state) => state.setLang);

	return (
		<nav className="sticky top-0 z-10 bg-primary flex justify-between p-4 text-white">
			<h1 className="text-xl font-bold">
				<Link to="/">Bima Adi</Link>
			</h1>
			<ul className="flex justify-end items-center gap-2">
				<li className={twMerge(location.pathname === "/" ? "underline" : "")}>
					<Link to="/">Home</Link>
				</li>
				<li
					className={twMerge(location.pathname === "/blogs" ? "underline" : "")}
				>
					<Link to="/blogs">Blogs</Link>
				</li>
				<li className="flex items-center">
					<select
						className="bg-primary text-white py-1"
						onChange={(e) => {
							setLang(e.target.value as "en" | "id");
							// Match /blogs/hello, /blogs/hai/en, /blogs/hail/id but not /blogs or /blogs/
							if (
								/^\/blogs\/(?!$|\s)([^/]+)(?:\/(en|id))?$/.test(
									location.pathname,
								)
							) {
								navigate({
									to: `/blogs/${location.pathname.split("/")[2]}/${e.target.value}`,
								});
							}
						}}
						value={lang}
						aria-label="Select language"
					>
						<option value="en">EN</option>
						<option value="id">ID</option>
					</select>
				</li>
			</ul>
		</nav>
	);
};
