import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/routes/blogs/Card";
import blogs from "@/data/blogs.json";

export const Route = createFileRoute("/blogs/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="px-4 text-white">
			<div className="mx-auto max-w-200 ">
				<h1 className="text-3xl font-bold pb-4">My Blogs</h1>
				<div className="flex flex-col gap-2 text-center">
					{blogs.map((blog) => (
						<Card
							key={blog.title}
							title={blog.title}
							link={blog.link}
							tags={blog.tags}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
