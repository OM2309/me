import ExperienceCard from "./experience-card";

const Experience = () => {
  const companies = [
    {
      name: "Octal IT Solution",
      role: "Software Engineer",
      duration: "2025 - Present",
      logo: "/images/octal.jpg",
      current: true,
      address: "Jaipur, India (On-Site)",
      responsibilities: [
        "Working on various projects and features",
        "Collaborating with cross-functional teams",
        "Developing and maintaining software systems",
        "Participating in code reviews and providing feedback",
        "Contributing to the company's growth and success"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      name: "Kalazara Technologies",
      role: "Software Engineer",
      duration: "Jan 2024 - Feb 2025",
      logo: "/images/kalazara.jpg",
      current: false,
      address: "Gwalior, India (On-Site)",
      responsibilities: [
        "Developing and enhancing web applications",
        "Collaborating with designers and QA engineers",
        "Optimizing code for performance and scalability",
        "Implementing new features and fixing bugs",
        "Participating in agile development cycles"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Express.js"],
    },
  ]
  return (
    <div className="space-y-6 mb-10">
      <h1 className="  text-lg font-semibold text-black dark:text-white">
        Experience
      </h1>
      <div className="space-y-6">
        {companies.map((company, index) => (
          <ExperienceCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Experience;