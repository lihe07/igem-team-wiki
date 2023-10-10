import { base } from "$app/paths";

/** @param {string} path */
export function transform(path) {
	return base + path;
}

export default [
	{
		text: "Project",
		children: [
			{
				text: "Description",
				link: transform("/Description"),
				icon: "fluent:slide-text-sparkle-28-regular",
				desc: "A brief overview of our project",
			},
			{
				text: "Experiments",
				link: transform("/Experiments"),
				icon: "fluent:beaker-24-regular",
				desc: "Lab sessions done by our wet team",
			},
			{
				text: "Engineering",
				link: transform("/Engineering"),
				icon: "fluent:arrow-trending-lines-24-regular",
				desc: "Contributions of our project",
			},
			{
				text: "PoC",
				link: transform("/PoC"),
				icon: "fluent:shield-task-28-regular",
				desc: "A brief overview of our project",
			},
			{
				text: "Results",
				link: transform("/Results"),
				icon: "fluent:shield-task-28-regular",
				desc: "A brief overview of our project",
			},
			{
				text: "Measurement",
				link: transform("/Measurement"),
				icon: "fluent:shield-task-28-regular",
				desc: "A brief overview of our project",
			},
		],
	},
	{
		text: "People",
		children: [
			{
				text: "Team",
				link: transform("/Team"),
				icon: "fluent:people-team-28-regular",
				desc: "A brief overview of our project",
			},
			{
				text: "Attributions",
				link: transform("/Attributions"),
				icon: "fluent:people-money-24-regular",
				desc: "A brief overview of our project",
			},
		],
	},
	{
		text: "Modelling",
		link: transform("/Modelling"),
	},
	{
		text: "Human Practices",
		link: transform("/Human_Practices"),
		icon: "",
	},
];
