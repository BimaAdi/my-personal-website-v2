import { useState } from "react";
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
import { I8n } from "@/components/shared/I8n";
import useWindowDimension from "@/hooks/useWindowDimension";
import { useI8nStore } from "@/store/i8n";

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

type TechName = keyof typeof techIconMapping;

const TechStackItem = ({
	name,
	onClick = () => {},
}: {
	name: TechName;
	onClick?: () => void;
}) => {
	const IconComponent = techIconMapping[name];
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
			className="bg-secondary text-center p-2 rounded-lg text-white hover:cursor-pointer"
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
				<b>{name}</b>
			</p>
		</button>
	);
};

export const TechStacks = () => {
	const { width } = useWindowDimension();
	const lang = useI8nStore((state) => state.lang);
	const [techs, setTechs] = useState<TechName[]>([
		"react",
		"nextjs",
		"typescript",
		"nodejs",
		"fastapi",
		"django",
		"python",
		"",
		"rust",
		"php",
		"laravel",
		"golang",
		"postgresql",
		"redis",
		"elasticsearch",
	]);

	const handleTechClick = (index: number) => {
		// Determine row length based on screen width
		let rowLength = 3;
		if (width >= 768) {
			rowLength = 4;
		}
		if (width >= 1024) {
			rowLength = 5;
		}

		// Check if the clicked tech is adjacent to the blank space
		const blankIndex =
			techs
				.map((tech, index) => (tech === "" ? index : -1))
				.filter((i) => i !== -1)[0] + 1;
		let isSwapable = false;
		if (index - 1 === blankIndex && blankIndex % rowLength !== 0) {
			isSwapable = true; // left
		}

		if (index + 1 === blankIndex && blankIndex % rowLength !== 1) {
			isSwapable = true; // right
		}

		if (index + rowLength === blankIndex && blankIndex - rowLength > 0) {
			isSwapable = true; // down
		}

		if (
			index - rowLength === blankIndex &&
			blankIndex + rowLength <= techs.length
		) {
			isSwapable = true; // up
		}

		// Swap the clicked tech with the blank space if adjacent
		if (isSwapable) {
			const newTechs = [...techs];
			[newTechs[index - 1], newTechs[blankIndex - 1]] = [
				newTechs[blankIndex - 1],
				newTechs[index - 1],
			];
			setTechs(newTechs);
		}
	};

	return (
		<section className="flex flex-col items-center justify-center gap-2 mb-20">
			<h2 className="text-center text-3xl pb-5 text-white">Tech Stack</h2>
			<div className="h-0.5 w-3/12 border-b-2 border-white"></div>
			<div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
				{techs.map((tech, index) => (
					<TechStackItem
						key={tech}
						name={tech}
						onClick={() => {
							handleTechClick(index + 1);
						}}
					/>
				))}
			</div>
			<p className="text-white max-w-125 text-justify">
				{I8n(lang, {
					en: "And it still growing. I always improve myself to learn new technology.To be honest it's more important to know when to use it rather than how to use it. (Btw try click the tech icons it will be fun!)",
					id: "Saya akan selalu meningkatkan diri saya untuk mempelajari teknologi baru. Sejujurnya, yang lebih penting adalah mengetahui kapan menggunakannya daripada bagaimana menggunakannya. (Ngomong-ngomong coba klik ikon teknologi!)",
				})}
				{/* And it still growing. I always improve myself to learn new technology.
				To be honest it's more important to know when to use it rather than how
				to use it. (Btw try click the tech icons it will be fun!) */}
			</p>
		</section>
	);
};
