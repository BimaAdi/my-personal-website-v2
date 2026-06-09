import { OpenAPIHono } from "@hono/zod-openapi";
import { getMyProfile } from "../repository/profile";
import { myProfileSchema } from "../schema/profile";

const profileApp = new OpenAPIHono();

profileApp.openapi(
	{
		method: "get",
		path: "/",
		responses: {
			200: {
				description: "Successful response",
				content: {
					"application/json": {
						schema: myProfileSchema,
					},
				},
			},
		},
		tags: ["Profile"],
	},
	async (c) => {
		const myProfile = await getMyProfile();

		return c.json(myProfile, 200);
	},
);

export default profileApp;
