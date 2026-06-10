import { createFileRoute } from "@tanstack/react-router";
import { Contacts } from "@/client/components/routes/home/Contacts";
import { Experience } from "@/client/components/routes/home/Experience";
import { Hero } from "@/client/components/routes/home/Hero";
import { TechStacks } from "@/client/components/routes/home/TechStacks";
import { profileServerFn } from "@/server/serverFn/profile";

export const Route = createFileRoute("/")({
	component: App,
	loader: async () => {
		const profile = await profileServerFn();
		return { profile };
	},
});

function App() {
	const { profile } = Route.useLoaderData();

	return (
		<main className="relative px-4">
			<Hero name={profile.name} role={profile.role} />
			<TechStacks skills={profile.skills} />
			<Experience items={profile.experience} />
			<Contacts contacts={profile.contacts} />
		</main>
	);
}
