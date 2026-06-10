import { createServerFn } from "@tanstack/react-start";
import myProfileJson from "@/data/my-profile.json";

export const profileServerFn = createServerFn({ method: "GET" }).handler(
	async () => {
		return myProfileJson;
	},
);
