import {
	FaEnvelope,
	FaGithub,
	FaGlobe,
	FaLinkedin,
	FaPhone,
} from "react-icons/fa";

type Contacts = {
	email: string;
	phone: string;
	linkedin: string;
	github: string;
	website: string;
};

const contactItems = [
	{
		label: "Email",
		valueKey: "email" as const,
		icon: FaEnvelope,
		href: (contacts: Contacts) => `mailto:${contacts.email}`,
	},
	{
		label: "Phone",
		valueKey: "phone" as const,
		icon: FaPhone,
		href: (contacts: Contacts) => `tel:${contacts.phone.replaceAll(" ", "")}`,
	},
	{
		label: "LinkedIn",
		valueKey: "linkedin" as const,
		icon: FaLinkedin,
		href: (contacts: Contacts) => contacts.linkedin,
	},
	{
		label: "GitHub",
		valueKey: "github" as const,
		icon: FaGithub,
		href: (contacts: Contacts) => contacts.github,
	},
	{
		label: "Website",
		valueKey: "website" as const,
		icon: FaGlobe,
		href: (contacts: Contacts) => contacts.website,
	},
] as const;

export const Contacts = ({ contacts }: { contacts: Contacts }) => {
	return (
		<section className="mx-auto mb-20 flex w-full max-w-4xl flex-col items-center gap-2">
			<h2 className="pb-5 text-center text-3xl text-textlight dark:text-textdark">
				Contacts
			</h2>
			<div className="h-0.5 w-3/12 border-b-2 border-textlight dark:border-textdark" />
			<div className="mt-5 grid w-full gap-3 rounded-xl border border-slate-200 bg-bglight p-4 dark:border-slate-700 dark:bg-bgdarksecondary sm:grid-cols-2 lg:grid-cols-3 sm:p-6">
				{contactItems.map(({ label, valueKey, icon: Icon, href }) => (
					<a
						key={label}
						href={href(contacts)}
						target={
							label === "Email" || label === "Phone" ? undefined : "_blank"
						}
						rel={
							label === "Email" || label === "Phone" ? undefined : "noreferrer"
						}
						className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/70 px-4 py-3 text-textlight transition hover:-translate-y-0.5 hover:border-bglightsecondary hover:bg-white dark:border-slate-700 dark:bg-bgdark dark:text-textdark dark:hover:border-bgdarksecondary"
					>
						<span className="grid h-10 w-10 place-items-center rounded-full bg-bglightsecondary text-white dark:bg-bgdarksecondary">
							<Icon />
						</span>
						<div className="min-w-0">
							<p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
								{label}
							</p>
							<p className="truncate text-sm font-medium">
								{contacts[valueKey]}
							</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};
