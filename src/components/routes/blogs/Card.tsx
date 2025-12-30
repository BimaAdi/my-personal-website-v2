import { Link } from "@tanstack/react-router";

export const Card = ({
	title,
	link = undefined,
	tags = [],
	created_date = undefined,
}: {
	title: string;
	link?: string;
	tags?: string[];
	created_date?: Date;
}) => {
	return (
		<div className="flex flex-col gap-2 bg-secondary px-6 py-3 rounded-xl text-left">
			<Link to={link ?? "#"}>
				<h2 className="text-xl font-bold hover:underline">{title}</h2>
			</Link>
			<div className="flex justify-between">
				<p>
					{tags.map((item, idx) => (
						<span key={item} className={idx !== 0 ? "ml-2" : ""}>
							#{item}
						</span>
					))}
				</p>
				<p>{created_date?.toLocaleDateString()}</p>
			</div>
		</div>
	);
};
