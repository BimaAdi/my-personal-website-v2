export const ExperienceItem = ({
	title,
	period,
	description,
}: {
	title: string;
	period: string;
	description: string;
}) => {
	return (
		<div>
			<div className="flex flex-wrap items-center justify-between gap-2">
				<h3 className="font-semibold dark:text-white">{title}</h3>
				<span className="text-slate-700 dark:text-slate-300">{period}</span>
			</div>
			<p className="mt-1 text-slate-700 dark:text-slate-300">{description}</p>
		</div>
	);
};
