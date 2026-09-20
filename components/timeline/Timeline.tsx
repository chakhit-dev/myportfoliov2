import React from 'react';

const experiences = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Contract",
    date: "Aug 2025 - Present",
    description:
      "Built and deployed production-ready web applications using Next.js, React, Express.js, Prisma, and MySQL. Designed RESTful APIs and relational database schemas, and managed VPS deployments with Nginx, Cloudflare, and SSL.",
    isCurrent: true,
  },
  {
    role: "FiveM Server Full-Stack Developer",
    company: "Contract",
    date: "Jan 2024 - Present",
    description:
      "Developed client-side and server-side systems using Lua and JavaScript, including inventory, economy, and player management features. Designed MySQL schemas for persistent player data and optimized VPS deployments and server performance.",
    isCurrent: true,
  },
];

export default function Timeline() {
  return (
    <div className="w-full mx-auto py-12 px-6">
      <div className="relative border-l border-neutral-200 ml-3 md:ml-0 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <div className={`absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-white ${exp.isCurrent ? 'bg-neutral-900' : 'bg-neutral-300'}`} />

            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
              <h3 className="text-xl font-bold text-neutral-900">
                {exp.role}
              </h3>
              {exp.isCurrent && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-900 border border-neutral-900 rounded-full">
                  Current
                </span>
              )}
            </div>

            <div className="text-sm font-medium text-neutral-500 mb-3 flex items-center gap-2">
              <span>{exp.company}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
              <span className="text-neutral-400">{exp.date}</span>
            </div>

            <p className="text-neutral-500 leading-relaxed max-w-xl text-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}