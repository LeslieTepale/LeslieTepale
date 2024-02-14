"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Qualitative & Quantitative Research Methods</li>
        <li>React</li>
        <li>JavaScript, HTML/CSS</li>
        <li>Next.js, Vue.js</li>
        <li>Figma</li>
        <li>Java</li>
        <li>Python</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          New Jersey Institute of Technology | Newark, NJ
          <br/>
          Sept 2020 - May 2024
          <br/>
          B.S. Web & Information Systems
          <br/>
          Minor in Psychology
          <br/>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Responsible Conduct of Research (RCR) Basic Course
          <br/> CITI Program 
          <br/> Issued February 2023 - Expires February 2026
          <br/>
        </li>
        <li>
          Social & Behavioral Research - Basic/Refresher
          <br/> CITI Program 
          <br/> Issued February 2023 - Expires February 2026
          <br/>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/leslie_GW.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am currently an undergrad student set to graduate in Spring 2024,
            In a technologically advanced world, I believe that it is important
            to look past the computer screen and see people, and build a 
            connection between them and their technology. Cultivating a platform 
            that caters to the increasingly diverse population is something that 
            is very important to me. I have knowledge in research methods and the
            design process, and I am eager to use this knowledge to benefit others.
            I am always looking to expand my knowledge and skill set. I am a detail 
            oriented team player and excited to work with others to create amazing applications.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;