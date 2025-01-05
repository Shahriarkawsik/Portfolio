import React from "react";
import { skills } from "../Javascript/skills";

const Skills = () => {
  return (
    <div className="bg-color5">
      <div className="w-11/12 lg:w-4/5 mx-auto font-OpenSans px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:py-32">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-45 leading-8 sm:leading-10 text-color1 text-center mb-6">
          Skills
        </h2>
        <div className="flex flex-1 items-center gap-5">
          {skills.map((skill, index) => (
            <div key={index} className="rounded-md px-4 py-1 bg-white border shadow-lg flex flex-col items-center justify-center">
              <h2 className="font-bold">{skill.skill}</h2>
              <figure>
                <img className="w-12" src={skill.logo} alt="" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
