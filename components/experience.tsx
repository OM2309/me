import ExperienceCard from "./experience-card";

const Experience = () => {
  const companies = [
    {
      name: "Octal IT Solution",
      role: "Software Engineer",
      duration: "2025 - Present",
      logo: "/images/octal.jpg",
      current: true,
      address: "Jaipur, India (On-Site)"
    },
    {
      name: "Kalazara Technologies",
      role: "Software Engineering",
      duration: "Jan 2024 - Feb 2025",
      logo: "/images/kalazara.jpg",
      current: false,
      address: "Gwalior, India (On-Site)"
    }
  ];
  return (
    <div className="space-y-6 mb-10">
      <h1 className="font-inter text-lg font-semibold text-black dark:text-white">
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