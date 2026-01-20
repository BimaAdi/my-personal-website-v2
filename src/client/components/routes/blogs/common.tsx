import type React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="max-w-250 mx-auto px-4 pb-10 text-textlight dark:text-textdark">
			{children}
		</main>
	);
};

export const Hero = ({ imageLink }: { imageLink?: string }) => {
	if (!imageLink)
		return <div className="w-full h-50 bg-gray-300 rounded-t-md mb-4" />;
	return (
		<img
			src={imageLink}
			alt="Blog Hero"
			className="w-full h-auto rounded-t-md mb-4"
		/>
	);
};

export const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<h1 className="text-5xl font-bold text-textlight dark:text-textdark">
			{children}
		</h1>
	);
};

export const Section = ({
	children,
	lvl = 1,
}: {
	children: React.ReactNode;
	lvl?: 1 | 2 | 3 | 4;
}) => {
	switch (lvl) {
		case 1:
			return (
				<h1 className="text-4xl font-bold text-textlight dark:text-textdark pt-6 pb-2">
					{children}
				</h1>
			);
		case 2:
			return (
				<h2 className="text-3xl font-bold text-textlight dark:text-textdark pt-5 pb-2">
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className="text-2xl font-bold text-textlight dark:text-textdark pt-4 pb-2">
					{children}
				</h3>
			);
		case 4:
			return (
				<h4 className="text-xl font-bold text-textlight dark:text-textdark pt-3 pb-2">
					{children}
				</h4>
			);
		default:
			return (
				<h1 className="text-4xl font-bold text-textlight dark:text-textdark">
					{children}
				</h1>
			);
	}
};

export const P = ({ children }: { children: React.ReactNode }) => {
	return (
		<p className="text-textlight dark:text-textdark text-justify pt-4">
			{children}
		</p>
	);
};

export const Table = ({
	head,
	body,
}: {
	head: React.ReactNode;
	body: React.ReactNode;
}) => {
	return (
		<table className="w-full text-left mt-4 overflow-x-scroll">
			<thead>
				<tr>{head}</tr>
			</thead>
			<tbody>{body}</tbody>
		</table>
	);
};

export const TableHeader = ({ children }: { children: React.ReactNode }) => {
	return <th className="px-2 py-1 bg-secondary text-white">{children}</th>;
};

export const TableRow = ({ children }: { children: React.ReactNode }) => {
	return (
		<tr className="border-t border-bgdark dark:border-slate-200">{children}</tr>
	);
};

export const TableData = ({ children }: { children: React.ReactNode }) => {
	return <td className="px-2 py-1">{children}</td>;
};

export const Ul = ({ children }: { children: React.ReactNode }) => {
	return <ul className="list-disc list-inside">{children}</ul>;
};

export const Ol = ({ children }: { children: React.ReactNode }) => {
	return <ol className="list-decimal list-inside">{children}</ol>;
};

export const Li = ({
	children,
	depth = 1,
}: {
	children: React.ReactNode;
	depth?: 1 | 2 | 3 | 4;
}) => {
	switch (depth) {
		case 1:
			return <li className="">{children}</li>;
		case 2:
			return <li className="pl-4">{children}</li>;
		case 3:
			return <li className="pl-8">{children}</li>;
		case 4:
			return <li className="pl-12">{children}</li>;
		default:
			return <li className="">{children}</li>;
	}
};
