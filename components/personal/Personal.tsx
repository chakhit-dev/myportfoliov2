import React from 'react';
import { Icon } from '@iconify/react';

const SKILLS_DATA = [
  { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Lua', 'Dart', 'SQL'] },
  { category: 'Frontend', skills: ['Next.js', 'React', 'Vite'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'FastAPI', 'Go'] },
  { category: 'Database', skills: ['MySQL', 'MariaDB', 'Prisma ORM'] },
  { category: 'Machine Learning', skills: ['Data Preprocessing', 'Feature Engineering', 'Model Deployment'] },
  { category: 'Tools & DevOps', skills: ['Git', 'GitHub', 'Linux', 'Nginx', 'Cloudflare', 'Windows VPS'] },
];

// ข้อมูลติดต่อพร้อมระบุไอคอนจาก Iconify (ใช้ชุด icon จาก lucide หรือ mdi ก็ได้ครับ)
const CONTACT_INFO = [
  { label: "Email", value: "chakhit.kanchana@gmail.com", href: "mailto:chakhit.kanchana@gmail.com", icon: "lucide:mail" },
  { label: "Phone", value: "+66 83 869 4010", href: "tel:+66838694010", icon: "lucide:phone" },
  { label: "Location", value: "Bangkok, Thailand", href: "#", icon: "lucide:map-pin" },
  { label: "Discord", value: "jonathans.dev", href: "#", icon: "ic:baseline-discord" },
  { label: "Instagram", value: "@nathanqlwx", href: "https://www.instagram.com/nathanqlwx", icon: "lucide:instagram" },
  { label: "Facebook", value: "ชาคริต กาญจนกิตติไพศาล", href: "https://www.facebook.com/chakhit1049", icon: "lucide:facebook" },
];

export default function Personal() {
  return (
    <div className="w-full mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="md:col-span-3 bg-neutral-100 rounded-2xl p-8 md:p-10 flex flex-col justify-end min-h-[240px]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">
            Chakhit Kanchanakittiphaisan
          </h1>
          <p className="text-lg text-neutral-500 font-medium">
            Software Developer · Bangkok, Thailand
          </p>
        </div>

        <div className="md:col-span-1 bg-neutral-900 text-white rounded-2xl p-8 flex flex-col justify-between min-h-[240px]">
          <div>
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
              🎓
            </div>
            <h3 className="text-xl font-bold mb-1">Rangsit Univ.</h3>
            <p className="text-neutral-400 text-sm">Computer Science</p>
          </div>
          <div className="mt-6">
            <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">GPAX</span>
            <span className="text-2xl font-bold">3.32</span>
          </div>
        </div>

        {SKILLS_DATA.map((item) => (
          <div 
            key={item.category} 
            className="md:col-span-2 bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 transition-colors"
          >
            <h3 className="text-lg font-bold text-neutral-900 mb-4">{item.category}</h3>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-sm font-medium text-neutral-600 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="md:col-span-4 bg-white border border-neutral-200 rounded-2xl p-8 md:p-10">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Let's Connect</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:bg-neutral-100/80 hover:border-neutral-200 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-colors shadow-sm">

                  <Icon icon={item.icon} className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium text-neutral-800 truncate group-hover:text-neutral-900">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}