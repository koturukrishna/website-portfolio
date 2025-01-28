import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Skills
        </h2>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">
                  {skill.name}
                </span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
