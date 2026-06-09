import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { myProfileSchema } from "../schema/profile";

const currentDir = dirname(fileURLToPath(import.meta.url));
const myProfileJsonPath = resolve(currentDir, "../../data/my-profile.json");

export const getMyProfile = async () => {
	const rawJson = await readFile(myProfileJsonPath, "utf-8");
	const parsedJson: unknown = JSON.parse(rawJson);

	return myProfileSchema.parse(parsedJson);
};
