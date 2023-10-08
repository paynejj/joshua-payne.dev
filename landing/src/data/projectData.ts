interface ProjectData {
  title: string;
  description: string;
  img?: string;
  link?: string;
  github?: string;
}

const projectData: ProjectData[] = [
  {
    title: "Rapid Web Framework",
    description: "Rust/Remix web framework",
    github: "https://github.com/DarrenBaldwin07/rapid",
  },
  {
    title: "VandyLifts Website",
    description: "Made website for club",
    link: "https://vandylifts.com",
    github: "https://github.com/VandyLifts-Website/website",
  },
];

export default projectData;
