import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { useDarkModeStore } from "@/client/store/darkMode";
import { useI8nStore } from "@/client/store/i8n";

export const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const lang = useI8nStore((state) => state.lang);
	const setLang = useI8nStore((state) => state.setLang);
	const mode = useDarkModeStore((state) => state.mode);
	const setMode = useDarkModeStore((state) => state.setMode);

	return (
		<nav className="sticky top-0 z-10 bg-bglight dark:bg-bgdark flex justify-between p-4 text-textlight dark:text-textdark">
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
						className="bg-bglight dark:bg-bgdark text-textlight dark:text-textdark py-1"
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
				<li>
					<button
						type="button"
						className="px-2 py-2 rounded bg-secondary grid place-items-center"
						onClick={() => {
							mode === "dark" ? setMode("light") : setMode("dark");
						}}
						aria-label="Toggle dark mode"
					>
						{mode === "dark" ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 inline"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								role="img"
								aria-label="moon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 inline"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#FFFFFF"
								role="img"
								aria-label="sun"
							>
								<circle
									cx="12"
									cy="12"
									r="5"
									stroke="#FFFFFF"
									strokeWidth={2}
									fill="#FFFFFF"
								/>
								<path
									stroke="#FFFFFF"
									strokeWidth={2}
									strokeLinecap="round"
									d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
								/>
							</svg>
						)}
					</button>
				</li>
			</ul>
		</nav>
	);
};
