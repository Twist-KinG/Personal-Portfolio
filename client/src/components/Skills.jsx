import React from "react";

const skills = ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind", "Express"];

export default function Skills() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <div key={i} className="p-4 bg-white shadow rounded-lg">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
