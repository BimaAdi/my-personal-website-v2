export const Container = ({ children }: { children: React.ReactNode }) => {
	return <main className="max-w-250 mx-auto px-4 text-white">{children}</main>;
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
	return <h1 className="text-5xl font-bold text-white">{children}</h1>;
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
				<h1 className="text-4xl font-bold text-white pt-6 pb-2">{children}</h1>
			);
		case 2:
			return (
				<h2 className="text-3xl font-bold text-white pt-5 pb-2">{children}</h2>
			);
		case 3:
			return (
				<h3 className="text-2xl font-bold text-white pt-4 pb-2">{children}</h3>
			);
		case 4:
			return (
				<h4 className="text-xl font-bold text-white pt-3 pb-2">{children}</h4>
			);
		default:
			return <h1 className="text-4xl font-bold text-white">{children}</h1>;
	}
};

export const P = ({ children }: { children: React.ReactNode }) => {
	return <p className="text-white text-justify pt-4">{children}</p>;
};
