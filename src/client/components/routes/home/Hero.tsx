import myProfilePicture from "@/client/components/shared/profile.jpeg";

export const Hero = () => {
	return (
		<section className="min-h-screen grid place-items-center">
			<div className="flex flex-col md:flex-row items-center gap-4">
				<img
					src={myProfilePicture}
					alt="Muhammad Bima Adi Prabowo"
					className="rounded-full w-32 md:w-60 h-32 md:h-60 object-cover mt-4 mx-auto shadow-lg border-2 border-[#001b2e]"
				/>
				<div className="text-center md:text-left flex flex-col gap-2">
					<h1 className="font-bold text-3xl md:text-5xl text-textlight dark:text-textdark">
						Muhammad Bima Adi Prabowo
					</h1>
					<p className="text-gray-800 dark:text-white/70 md:text-3xl">
						Software Engineer / Fullstack Developer
					</p>
				</div>
			</div>
		</section>
	);
};
