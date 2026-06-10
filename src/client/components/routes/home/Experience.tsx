import { ExperienceItem } from "@/client/components/routes/cv/ExperienceItem";

type Experience = {
	title: string;
	period: string;
	description: string;
};

export const Experience = ({ items }: { items: Experience[] }) => {
	if (items.length === 0) {
		return null;
	}

	return (
		<section className="mx-auto mb-20 flex w-full max-w-4xl flex-col items-center gap-2">
			<h2 className="pb-5 text-center text-3xl text-textlight dark:text-textdark">
				Experience
			</h2>
			<div className="h-0.5 w-3/12 border-b-2 border-textlight dark:border-textdark"></div>
			<div className="mt-5 w-full space-y-4 rounded-xl border border-slate-200 bg-bglight p-4 dark:border-slate-700 dark:bg-bgdarksecondary sm:p-6">
				{items.map((item) => (
					<ExperienceItem
						key={`${item.title}-${item.period}`}
						title={item.title}
						period={item.period}
						description={item.description}
					/>
				))}
			</div>
		</section>
	);
};
