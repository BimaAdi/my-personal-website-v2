import { Link } from "@tanstack/react-router";
import { useI8nStore } from "@/client/store/i8n";

export const Card = ({
	title,
	link = undefined,
	tags = [],
	created_date = undefined,
	hasMultiLang = false,
}: {
	title: string;
	link?: string;
	tags?: string[];
	created_date?: Date;
	hasMultiLang?: boolean;
}) => {
	const lang = useI8nStore((state) => state.lang);

	const getLink = () => {
		if (!link) return "#";
		if (hasMultiLang) {
			return `${link}/${lang}`;
		}
		return link;
	};

	return (
		<div className="flex flex-col gap-2 bg-bgsecondary px-6 py-3 rounded-xl text-left text-white">
			<Link to={getLink()}>
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
