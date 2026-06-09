import ExperienceCard from "./experience-card";

const Experience = () => {
  const companies = [
    {
      name: "Memorres",
      role: "Consultant · Full-time",
      duration: "Apr 2026 - Present",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQFvlZNd4LPNoQ/company-logo_200_200/company-logo_200_200/0/1722860798119/memorres_logo?e=1782345600&v=beta&t=76QE2aYmw4SD8WwaYRbhBRV8L-3Pz9-s9HEOFXZvhNE",
      current: true,
      address: "Jaipur, Rajasthan, India · On-site",
      responsibilities: [
        "Architect and engineer high-performance web applications using React, Next.js, and TypeScript.",
        "Collaborate with product and design teams to deliver seamless user experiences and modern visual systems.",
        "Perform code reviews, optimize database structures, and establish engineering best practices."
      ],
      technologies: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    },
    {
      name: "Octal IT Solution (CMMI Level 3 Appraised)",
      role: "Software Developer · Full-time",
      duration: "Feb 2025 - Apr 2026 · 1 yr 3 mos",
      logo: "/images/octal.jpg",
      current: false,
      address: "Jaipur, Rajasthan, India · On-site",
      responsibilities: [
        "Built smart and interactive web apps using modern technologies like React, Next.js, React Native, and the MERN stack."
      ],
      technologies: ["TypeScript", "Next.js", "React", "React Native", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    }
  ];
  
  return (
    <div className="space-y-6 mb-10">
      <h1 className="text-lg font-semibold text-black dark:text-white">
        Experience
      </h1>
      <div className="space-y-8">
        {companies.map((company, index) => (
          <ExperienceCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
