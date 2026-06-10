import { useEffect, useState } from "react";
import {
	FaLaravel,
	FaNodeJs,
	FaPhp,
	FaPython,
	FaReact,
	FaRust,
} from "react-icons/fa";
import {
	SiDjango,
	SiElasticsearch,
	SiFastapi,
	SiNextdotjs,
	SiPostgresql,
	SiRedis,
	SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { I8n } from "@/client/components/shared/I8n";
import useWindowDimension from "@/client/hooks/useWindowDimension";
import { useI8nStore } from "@/client/store/i8n";

const techIconMapping = {
	react: FaReact,
	nextjs: SiNextdotjs,
	typescript: SiTypescript,
	nodejs: FaNodeJs,
	fastapi: SiFastapi,
	django: SiDjango,
	python: FaPython,
	laravel: FaLaravel,
	php: FaPhp,
	golang: TbBrandGolang,
	rust: FaRust,
	postgresql: SiPostgresql,
	redis: SiRedis,
	elasticsearch: SiElasticsearch,
	"": null,
};

type TechLabel = Exclude<keyof typeof techIconMapping, "">;

type TechSkill = {
	name: string;
	tech_label: string;
};

type TechItem = {
	name: string;
	tech_label: TechLabel | "";
};

const isTechLabel = (value: string): value is TechLabel =>
	value in techIconMapping && value !== "";

const buildTechItems = (skills: TechSkill[]) => {
	const techItems: TechItem[] = skills
		.filter((skill): skill is TechSkill & { tech_label: TechLabel } =>
			isTechLabel(skill.tech_label),
		)
		.map((skill) => ({
			name: skill.name,
			tech_label: skill.tech_label,
		}));

	techItems.splice(Math.floor(techItems.length / 2), 0, {
		name: "",
		tech_label: "",
	});

	return techItems;
};

const TechStackItem = ({
	item,
	onClick = () => {},
}: {
	item: TechItem;
	onClick?: () => void;
}) => {
	const IconComponent = techIconMapping[item.tech_label];
	if (!IconComponent)
		return (
			<div
				style={{
					display: "block",
					margin: "auto",
					width: "100px",
					height: "100px",
				}}
			></div>
		);

	return (
		<button
			type="button"
			onClick={onClick}
			className="bg-bglightsecondary dark:bg-bgdarksecondary text-center p-2 rounded-lg text-white hover:cursor-pointer"
		>
			<IconComponent
				style={{
					display: "block",
					margin: "auto",
					width: "100px",
					height: "100px",
					color: "#ffffff",
				}}
			/>
			<p>
				<b>{item.name}</b>
			</p>
		</button>
	);
};

export const TechStacks = ({ skills }: { skills: TechSkill[] }) => {
	const { width } = useWindowDimension();
	const lang = useI8nStore((state) => state.lang);
	const [techs, setTechs] = useState<TechItem[]>(() => buildTechItems(skills));

	useEffect(() => {
		setTechs(buildTechItems(skills));
	}, [skills]);

	const handleTechClick = (index: number) => {
		// Determine row length based on screen width
		let rowLength = 3;
		if (width >= 768) {
			rowLength = 4;
		}
		if (width >= 1024) {
			rowLength = 5;
		}

		const blankIndex = techs.findIndex((tech) => tech.tech_label === "");
		const blankRow = Math.floor(blankIndex / rowLength);
		const blankCol = blankIndex % rowLength;
		const row = Math.floor(index / rowLength);
		const col = index % rowLength;
		const isSwapable =
			(row === blankRow && Math.abs(col - blankCol) === 1) ||
			(col === blankCol && Math.abs(row - blankRow) === 1);

		if (isSwapable && blankIndex >= 0) {
			const newTechs = [...techs];
			[newTechs[index], newTechs[blankIndex]] = [
				newTechs[blankIndex],
				newTechs[index],
			];
			setTechs(newTechs);
		}
	};

	return (
		<section className="flex flex-col items-center justify-center gap-2 mb-20">
			<h2 className="text-center text-3xl pb-5 text-textlight dark:text-textdark">
				Tech Stack
			</h2>
			<div className="h-0.5 w-3/12 border-b-2 border-textlight dark:border-textdark"></div>
			<div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
				{techs.map((tech, index) => (
					<TechStackItem
						key={`${tech.tech_label}-${index}`}
						item={tech}
						onClick={() => {
							handleTechClick(index);
						}}
					/>
				))}
			</div>
			<p className="text-textlight dark:text-textdark max-w-125 text-justify">
				{I8n(lang, {
					en: "And it still growing. I always improve myself to learn new technology.To be honest it's more important to know when to use it rather than how to use it. (Btw try click the tech icons it will be fun!)",
					id: "Saya akan selalu meningkatkan diri saya untuk mempelajari teknologi baru. Sejujurnya, yang lebih penting adalah mengetahui kapan menggunakannya daripada bagaimana menggunakannya. (Ngomong-ngomong coba klik ikon teknologi!)",
				})}
			</p>
		</section>
	);
};
