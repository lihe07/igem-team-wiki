import { base } from "$app/paths";

/** @param {string} path */
export function transform(path) {
  return base + path;
}

/** @param {string} path */
export function remote(path) {
  return "https://static.igem.wiki/teams/4714/wiki" + path;
}

export default [
  {
    text: "Project",
    children: [
      {
        text: "Description",
        link: transform("/description"),
        icon: "fluent:slide-text-sparkle-28-regular",
        desc: "A brief overview of our project",
      },
      {
        text: "Experiments",
        link: transform("/experiments"),
        icon: "fluent:beaker-24-regular",
        desc: "Lab sessions done by our wet team",
      },
      {
        text: "Engineering",
        link: transform("/engineering"),
        icon: "fluent:settings-24-regular",
        desc: "Bioengineering of our project",
      },
      {
        text: "Results",
        link: transform("/results"),
        icon: "fluent:shield-task-28-regular",
        desc: "Findings from our experiments",
      },
      {
        text: "Measurement",
        link: transform("/measurement"),
        icon: "fluent:ruler-28-regular",
        desc: "Measurement in experiments",
      },
      {
        text: "Contribution",
        link: transform("/contribution"),
        icon: "fluent:people-community-24-regular",
        desc: "Our contribution to the community",
      },
    ],
  },
  {
    text: "People",
    children: [
      {
        text: "Team",
        link: transform("/team"),
        icon: "fluent:people-team-28-regular",
        desc: "Meet our team members",
      },
      {
        text: "Attributions",
        link: transform("/attributions"),
        icon: "fluent:people-money-24-regular",
        desc: "Acknowledgements to our supporters",
      },
    ],
  },
  {
    text: "Model",
    link: transform("/model"),
    icon: "fluent:math-formula-24-filled",
  },
  {
    text: "Human Practices",
    link: transform("/human-practices"),
    icon: "fluent:accessibility-28-regular",
  },
];
