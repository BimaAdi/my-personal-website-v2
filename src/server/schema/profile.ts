import z from "zod";

export const myProfileSchema = z.object({
	name: z.string(),
	role: z.string(),
	location: z.string(),
	summary: z.string(),
	skills: z.array(
		z.object({
			name: z.string(),
			tech_label: z.string(),
		}),
	),
	contacts: z.object({
		email: z.email(),
		phone: z.string(),
		linkedin: z.url(),
		github: z.url(),
		website: z.url(),
	}),
	experience: z.array(
		z.object({
			title: z.string(),
			period: z.string(),
			description: z.string(),
		}),
	),
	volunteer: z.array(
		z.object({
			title: z.string(),
			period: z.string(),
			description: z.string(),
		}),
	),
	education: z.array(
		z.object({
			title: z.string(),
			period: z.string(),
			description: z.string(),
		}),
	),
});
