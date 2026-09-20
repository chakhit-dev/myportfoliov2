import Image from "next/image";

const projects = [
  {
    title: "Multi-Branch POS Management System",
    category: "WEBSITE APPICATION",
    description: "Full-stack multi-branch POS system featuring inventory, orders, tables, and analytics.",
    link: "https://github.com/chakhit-dev/multi-branch-pos-management-system",
  },
  {
    title: "Weather AI",
    category: "Machine Learning",
    description: "Full-stack AI weather forecasting service built with Python, Scikit-Learn, FastAPI, and Next.js.",
    link: "https://github.com/chakhit-dev/ai_weather_forecasting_thailand",
  },
  {
    title: "Lune Programming Language",
    category: "Go",
    description: "A lightweight, custom programming language and bytecode virtual machine implemented in Go.",
    link: "https://github.com/chakhit-dev/lune",
  },
  {
    title: "Food Calorie Counter",
    category: "Mobile App",
    description: "Track macros and calculate daily calories effortlessly with Flutter and Node.js.",
    link: "https://github.com/chakhit-dev/csc452_foodapp",
  },
  {
    title: "Drawcard Game",
    category: "Game",
    description: "A simple interactive card drawing game built using Processing.",
    link: "https://github.com/chakhit-dev/csc451-drawcard-game",
  },
  {
    title: "TextEncryption",
    category: "Desktop App",
    description: "Desktop GUI application for encoding and decoding text files using Huffman coding and prefix-tree compression in Java.",
    link: "https://github.com/chakhit-dev/TextEncryption",
  },
  {
    title: "POS Restaurant Management System",
    category: "Desktop App",
    description: "A full-featured Java Swing desktop POS and restaurant management system integrated with MySQL.",
    link: "https://github.com/chakhit-dev/pos_restaurant_management_system",
  },
];

export default function MyProject() {
  return (
    <div className="w-full mx-auto py-8 px-6">
      <div className="flex flex-col border-t border-neutral-200">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center py-8 border-b border-neutral-200 hover:px-4 hover:bg-neutral-50 transition-all duration-300"
          >
            <div className="hidden md:block w-48 text-sm text-neutral-400 font-mono uppercase tracking-wider">
              {project.category}
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-sm">
                {project.description}
              </p>
            </div>

            <div className="mt-4 md:mt-0 text-neutral-400 group-hover:text-neutral-900 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}