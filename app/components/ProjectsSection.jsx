"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Care Connect",
    description: "Case study; Mental health web app for healthcare professionals impacted by COVID-19",
    image: "/images/projects/healthcare.jpg",
    tag: ["All", "UX"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/PT3LXxN1tpwzAuPNkEmPfG/Care-Connect?page-id=0%3A1&type=design&node-id=6-27&viewport=82%2C402%2C0.07&t=XWUS3XnidEl2FKsz-1&scaling=scale-down&starting-point-node-id=6%3A27&mode=design",
  },
  {
    id: 2,
    title: "My WebClass",
    description: "Developed front-end for website that used OpenAI API to create educational contemt in React. Integrated Google Analytics to track sales funnel and SEO.",
    image: "/images/projects/webclass.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NJIT-WIS/project-2-is421-teamb",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PlantPal",
    description: "Web-App that uses the Plant.ID API to find a plant from a user submitted image using Next.js & tailwind",
    image: "/images/projects/plant.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LeslieTepale/is322-app1",
    previewUrl: "https://www.figma.com/file/iyggwN4Oq9t3t7BLcBYqbo/plantapp-coding-copy?type=design&node-id=0-1&mode=design",
  },
  {
    id: 4,
    title: "HACCS Website",
    description: "Developed Initial wireframe for club website",
    image: "/images/projects/haccs.png",
    tag: ["All", "UX"],
    gitUrl: "https://www.figma.com/file/1YIAGiw0wZDuf2Idi9mATC/HACCS-Website?type=design&mode=design&t=xptnXKlShTyfyJ9N-1",
    previewUrl: "https://haccsnjit.com/",
  },
  {
    id: 5,
    title: "Effects of Personal Development Social Media Content on Frequent Users",
    description: "Short term in-class group research project using surveys",
    image: "/images/projects/socialmedia.png",
    tag: ["All", "UX"],
    gitUrl: "/",
    previewUrl: "/SocialMediaStudy.pdf",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UX"
          isSelected={tag === "UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;