import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="w-screen h-screen grid place-items-center">
			<h1 className="text-3xl font-bold">Welcome to my personal website</h1>
		</main>
	);
}
