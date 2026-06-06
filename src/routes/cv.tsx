import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { ExperienceItem } from "@/client/components/routes/cv/ExperienceItem";
import myProfilePicture from "@/client/components/shared/profile.jpeg";

export const Route = createFileRoute("/cv")({
	component: RouteComponent,
});

function RouteComponent() {
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
								Muhammad Bima Adi Prabowo
							</h1>
							<p className="text-sm text-slate-700 dark:text-slate-300">
								Software Engineer / Fullstack Developer
							</p>
						</div>
					</div>
					<div className="text-sm text-slate-700 dark:text-slate-300">
						<p>Bandung, Indonesia</p>
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
							I am Software Engineer from Bandung Indonesia with 6 years working
							experience, currently work at Quantus Telematika Indonesia. I am
							exicited to explore new technology, it&apos;s feels like adventure
							for me. I think a good software engineer must often explore new
							technology. New tech always come every year. If we don&apos;t keep
							up with technology, we will leave behind.
						</p>
					</section>

					{/* Skills Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600">
						<h2 className="mb-2 text-lg font-semibold dark:text-white">
							Skills
						</h2>
						<div className="flex flex-wrap gap-2 text-sm">
							{[
								"React",
								"NextJs",
								"Typescript",
								"NodeJs",
								"Fastapi",
								"Django",
								"Python",
								"Rust",
								"Php",
								"Laravel",
								"Golang",
								"PostgreSql",
								"Redis",
								"Elasticsearch",
							].map((skill) => (
								<span
									key={skill}
									className="rounded-full bg-slate-200 px-3 py-1 text-slate-800 dark:bg-slate-700 dark:text-slate-100"
								>
									{skill}
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
							<p>Email: bimaadi419@gmail.com</p>
							<p>Phone: +62 87770106851</p>
							<p>
								LinkedIn:
								https://www.linkedin.com/in/muhammad-bima-adi-prabowo-0a9847192/
							</p>
							<p>GitHub: github.com/BimaAdi</p>
							<p>Personal Website: https://www.bimaadi.dev</p>
						</div>
					</section>

					{/* Experience Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-3 text-lg font-semibold dark:text-white">
							Experience
						</h2>
						<div className="space-y-4 text-sm">
							<ExperienceItem
								title="Software Engineer - Full Time at Quantus Telematika Indonesia"
								period="2020 - Present"
								description="Develop and Maintain certain Project (AnalitiQ, Asset Management System, Coal Trip, Koperasi). I also have task to do some research on new tech stack and tools to improve our team productivity"
							/>
							<ExperienceItem
								title="Backend Developer - Freelance at DOT Indonesia"
								period="Aug 2021 - Dec 2021"
								description="Maintain Sirka health app"
							/>
							<ExperienceItem
								title="Backend Developer - Intern at Lembaga Ilmu Pengetahuan Indonesia"
								period="Sep 2018 - Nov 2018"
								description="Create Web App for twitter sentiment analysis (deploy machine learning model and stream twitter (X))"
							/>
						</div>
					</section>

					{/* Volunteer Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-3 text-lg font-semibold dark:text-white">
							Volunteer
						</h2>
						<div className="space-y-4 text-sm">
							<ExperienceItem
								title="Lead Developer - Website team PyconId Conference 2026"
								period="2026 - Present"
								description="Leading project team, code review, maintain timeline and tech decision"
							/>
							<ExperienceItem
								title="Speaker - PyconId Conference 2025"
								period="2025"
								description="Title: Behind the scene website PyconID 2025 (How to maintain Open source Project)"
							/>
							<ExperienceItem
								title="Lead Developer - Website team PyconId Conference 2025"
								period="2025"
								description="Leading project team, code review, maintain timeline and tech decision. The project is open source so everyone can contribute to show the spirit of community"
							/>
							<ExperienceItem
								title="Speaker - Pycon APAC Conference 2024"
								period="2024"
								description="Title: How to write python code like typescript"
							/>
							<ExperienceItem
								title="Frontend Developer - Website team Pycon APAC Conference 2024"
								period="2024"
								description="Develop and maintain frontend for website Pycon APAC 2024"
							/>
						</div>
					</section>

					{/* Education Section */}
					<section className="rounded-xl border border-slate-200 p-4 dark:border-slate-600 sm:col-span-2">
						<h2 className="mb-3 text-lg font-semibold dark:text-white">
							Education
						</h2>
						<div className="space-y-4 text-sm">
							<ExperienceItem
								title="Bachelor of Computer Science"
								period="2015 - 2019"
								description="Universitas Pendidikan Indonesia (UPI), Bandung."
							/>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
