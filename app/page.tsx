import MyProject from "@/components/myprojects/myproject";
import Personal from "@/components/personal/Personal";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
    return (
        <>
            <section id="home" className="min-h-screen py-20 flex flex-col justify-center items-center">
                <div className="max-w-7xl w-full mx-auto px-6 text-center flex flex-col items-center">

                    <div className="w-20 h-20 rounded-full bg-neutral-200 mb-6 overflow-hidden">
                        <img src="/imgs/me.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-neutral-200 bg-neutral-50 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-bold tracking-widest uppercase text-neutral-600">
                            Available for Internship
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-neutral-900 leading-tight mb-6">
                        Architecting intelligent apps <br className="hidden md:block" /> & high-performance systems.
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mx-auto mb-10">
                        Hi, I'm <span className="font-medium text-neutral-900">Chakhit</span>, a software engineer based in Thailand. I specialize in building efficient applications, developing predictive models, and designing scalable architectures.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                        <a 
                            href="#project" 
                            className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                        >
                            View Work
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        <a 
                            href="https://docs.google.com/document/d/1KzgpPtTILcvqG6K0rBzvya0FCr9n0WjgZ7uWSDmLG70/edit?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 text-neutral-600 text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-900 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Resume
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/chakhit-kanchanakittiphaisan-297493400/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 text-neutral-600 text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-900 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            LinkedIn
                        </a>

                        <a 
                            href="https://github.com/chakhit-dev" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 text-neutral-600 text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-900 transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none">
                                <g clipPath="url(#SVGXv8lpc2Y)">
                                <path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clipRule="evenodd" />
                                </g>
                                <defs>
                                <clipPath id="SVGXv8lpc2Y">
                                    <path fill="#fff" d="M0 0h24v24H0z" />
                                </clipPath>
                                </defs>
                            </g>
                            </svg>
                            Github
                        </a>
                    </div>

                </div>
            </section>

            <section id="about" className="min-h-screen py-20 flex flex-col justify-center">
                <div className="max-w-7xl w-full mx-auto px-6 flex flex-col">

                    <div className="max-w-3xl mx-auto flex flex-col items-center mb-16 text-center">
                        <h1 className="text-6xl font-bold tracking-tight text-neutral-900">ABOUT ME</h1>
                        <p className="text-xl text-neutral-400 font-semibold mt-2">a little more about me.</p>
                    </div>

                    <div className="w-full">
                        <Personal />
                    </div>

                </div>
            </section>

            <section id="project" className="min-h-screen py-20 flex flex-col justify-center">
                <div className="max-w-7xl w-full mx-auto px-6 flex flex-col">

                    <div className="max-w-3xl mx-auto flex flex-col items-center mb-16 text-center">
                        <h1 className="text-6xl font-bold tracking-tight text-neutral-900">PROJECT</h1>
                        <p className="text-xl text-neutral-400 font-semibold mt-2">selected projects & experiments.</p>
                    </div>

                    <div className="w-full">
                        <MyProject />
                    </div>

                </div>
            </section>

            <section id="journey" className="min-h-screen py-20 flex flex-col justify-center">
                <div className="max-w-7xl w-full mx-auto px-6 flex flex-col">

                    <div className="flex flex-col items-center mb-16 text-center">
                        <h1 className="text-6xl font-bold tracking-tight text-neutral-900">MY JOURNEY</h1>
                        <p className="text-xl text-neutral-400 font-semibold mt-2">a timeline of my experience.</p>
                    </div>

                    <div className="flex justify-center">
                        <Timeline />
                    </div>
                </div>
            </section>

            <section id="contact" className="py-32 border-t border-neutral-200 bg-neutral-50/50">
                <div className="max-w-7xl w-full mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">

                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </div>
                                <span className="text-sm font-mono font-bold tracking-widest text-neutral-500 uppercase">
                                    Available for work
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
                                Interested in <br />working together?
                            </h2>
                            <p className="text-lg text-neutral-500 font-light leading-relaxed">
                                Whether you have a project in mind, a job opportunity, or just want to say hi, feel free to drop me a message.
                            </p>
                        </div>

                        <div className="flex flex-col pt-2">
                            <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">
                                Drop me a line
                            </p>
                            <a
                                href="mailto:chaakhit.kanchana@gmail.com"
                                className="text-2xl md:text-4xl font-bold text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors inline-block w-fit mb-12"
                            >
                                chaakhit.kanchana@gmail.com
                            </a>

                            <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">
                                On the web
                            </p>
                            <div className="flex flex-col gap-3">
                                <a href="https://github.com/chakhit-dev" className="text-lg font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2 group">
                                    <span className="w-4 h-[1px] bg-neutral-300 group-hover:w-8 group-hover:bg-neutral-900 transition-all"></span>
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/chakhit-kanchanakittiphaisan-297493400/" className="text-lg font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2 group">
                                    <span className="w-4 h-[1px] bg-neutral-300 group-hover:w-8 group-hover:bg-neutral-900 transition-all"></span>
                                    LinkedIn
                                </a>
                                <a href="#" className="text-lg font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2 group">
                                    <span className="w-4 h-[1px] bg-neutral-300 group-hover:w-8 group-hover:bg-neutral-900 transition-all"></span>
                                    Phone Number (+66 083-869-4010)
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
