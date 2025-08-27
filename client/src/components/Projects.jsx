import React from "react";

const projects = [
  { title: "EMS System", desc: "Manage employees, salaries & leaves." },
  { title: "LMS Platform", desc: "Online course platform with quizzes." },
  { title: "Gyaandeep Nepal", desc: "Educational resource sharing site." }
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
