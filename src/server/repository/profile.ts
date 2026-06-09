import myProfileJson from "@/data/my-profile.json";
import { myProfileSchema } from "../schema/profile";

export const getMyProfile = async () => {
	return myProfileSchema.parse(myProfileJson);
};
