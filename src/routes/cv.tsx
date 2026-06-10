import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { ExperienceItem } from "@/client/components/routes/cv/ExperienceItem";
import myProfilePicture from "@/client/components/shared/profile.jpeg";
import { profileServerFn } from "@/server/serverFn/profile";

export const Route = createFileRoute("/cv")({
	component: RouteComponent,
	loader: async () => {
		const profile = await profileServerFn();
		return { profile };
	},
});

function RouteComponent() {
	const { profile } = Route.useLoaderData();
	const targetRef = useRef<HTMLDivElement>(null);

	const handlePrint = () => {
		if (!targetRef.current) return;
		window.print();
	};

	return (
		<div className="mx-auto w-full max-w-4xl p-4 sm:p-6">
			<style>{`
				@media print {
					.no-print {
						display: none !important;
					}

					body * {
						visibility: hidden;
					}

					#print-cv,
					#print-cv * {
						visibility: visible;
					}

					#print-cv {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
					}
				}
			`}</style>
			<div className="w-full flex justify-end">
				<button
					type="button"
					onClick={handlePrint}
					className="no-print mb-4 inline-flex items-center rounded-lg bg-bglightsecondary dark:bg-bgdarksecondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2"
				>
					Print CV
				</button>
			</div>
			{/* biome-ignore lint/correctness/useUniqueElementIds: required static selector for print CSS target */}
			<div
				id="print-cv"
				ref={targetRef}
				className="border border-slate-300 bg-bglight p-6 text-textlight shadow-md dark:border-slate-600 dark:bg-bgdark dark:text-textdark sm:p-8"
			>
				{/* Profile Section */}
				<div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<img
							src={myProfilePicture}
							alt="Profile"
							className="h-20 w-20 rounded-full border-2 border-slate-300 object-cover dark:border-slate-500"
						/>
						<div>
							<h1 className="text-2xl font-bold sm:text-3xl dark:text-white">
								{profile.name}
							</h1>
							<p className="text-sm text-slate-700 dark:text-slate-300">
								{profile.role}
							</p>
						</div>
					</div>
					<div className="text-sm text-slate-700 dark:text-slate-300">
						<p>{profile.location}</p>
						{/* <p>Open to remote opportunities</p> */}
					</div>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
					{/* About Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600">
						<h2 className="mb-2 text-lg font-semibold dark:text-white">
							About
						</h2>
						<p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
							{profile.summary}
						</p>
					</section>

					{/* Skills Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600">
						<h2 className="mb-2 text-lg font-semibold dark:text-white">
							Skills
						</h2>
						<div className="flex flex-wrap gap-2 text-sm">
							{profile.skills.map((skill) => (
								<span
									key={skill.tech_label}
									className="rounded-full bg-slate-200 px-3 py-1 text-slate-800 dark:bg-slate-700 dark:text-slate-100"
								>
									{skill.name}
								</span>
							))}
						</div>
					</section>

					{/* Contacts Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-2 text-lg font-semibold dark:text-white">
							Contacts
						</h2>
						<div className="grid gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
							<p>Email: {profile.contacts.email}</p>
							<p>Phone: {profile.contacts.phone}</p>
							<p>LinkedIn: {profile.contacts.linkedin}</p>
							<p>GitHub: {profile.contacts.github}</p>
							<p>Personal Website: {profile.contacts.website}</p>
						</div>
					</section>

					{/* Experience Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-3 text-lg font-semibold dark:text-white">
							Experience
						</h2>
						<div className="space-y-4 text-sm">
							{profile.experience.map((item) => (
								<ExperienceItem
									key={`${item.title}-${item.period}`}
									title={item.title}
									period={item.period}
									description={item.description}
								/>
							))}
						</div>
					</section>

					{/* Volunteer Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-3 text-lg font-semibold dark:text-white">
							Volunteer
						</h2>
						<div className="space-y-4 text-sm">
							{profile.volunteer.map((item) => (
								<ExperienceItem
									key={`${item.title}-${item.period}`}
									title={item.title}
									period={item.period}
									description={item.description}
								/>
							))}
						</div>
					</section>

					{/* Education Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-3 text-lg font-semibold dark:text-white">
							Education
						</h2>
						<div className="space-y-4 text-sm">
							{profile.education.map((item) => (
								<ExperienceItem
									key={`${item.title}-${item.period}`}
									title={item.title}
									period={item.period}
									description={item.description}
								/>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
