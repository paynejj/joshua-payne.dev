interface ExperienceData {
  title: string;
  company: string;
  bullets: string[];
  startDate: string;
  endDate: string;
}

const experienceData: ExperienceData[] = [
  {
    title: "Software Engineer",
    company: "Cincinnati Ventures",
    bullets: ["made api", "made logic", "made stuff"],
    startDate: "July 2023",
    endDate: "Present",
  },
  {
    title: "Contractor",
    company: "Reset Ministries",
    bullets: ["learn salesforce", "import salesforce", "obliterate keela"],
    startDate: "June 2022",
    endDate: "August 2022",
  },
];

export default experienceData;
