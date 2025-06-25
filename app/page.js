'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  return (
    <main className="p-6 max-w-6xl mx-auto relative">

      {/* Floating AI circles */}
      <div className="fixed top-1/4 right-10 w-24 h-24 rounded-full bg-purple-600 opacity-20 blur-2xl animate-bounce z-0"></div>
      <div className="fixed bottom-1/4 left-10 w-16 h-16 rounded-full bg-blue-500 opacity-20 blur-2xl animate-ping z-0"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md py-4 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 max-w-6xl mx-auto">
          <div className="text-xl font-bold text-purple-400">Rohit Verma</div>
          <div className="flex gap-4 items-center text-gray-300 text-lg">
            <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-blue-400">Home</Link>
            <Link to="experience" smooth duration={500} className="cursor-pointer hover:text-blue-400">Experience</Link>
            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-400">Projects</Link>
            <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-400">Skills</Link>
            <Link to="education" smooth duration={500} className="cursor-pointer hover:text-blue-400">Education</Link>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-400">Contact</Link>
            <a
              href="https://drive.google.com/file/d/1hoAlOx4IxBtVhcvb3rxPKlPau5_tS0IB/view?usp=sharing"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded hover:scale-105 transition"
            >
              Download Resume
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 text-white bg-gray-700 p-2 rounded hover:bg-gray-600 transition"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative mt-40 mb-12 flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Rohit Verma
          </h1>
          <p className="text-2xl text-gray-400 mb-6">
            <Typewriter
              words={[
                'Full Stack Developer',
                'React | Next.js | Node.js',
                'Docker | GCP | REST APIs',
                'Problem Solver'
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <div className="flex justify-center gap-6 text-lg">
            <a href="https://github.com/rohit1569" target="_blank" className="text-blue-400 hover:text-blue-300 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/rohit-verma-891020205" target="_blank" className="text-blue-400 hover:text-blue-300 transition">LinkedIn</a>
            <a href="mailto:rohitverma1569@gmail.com" className="text-blue-400 hover:text-blue-300 transition">Email</a>
          </div>
        </motion.div>

        {/* Glow Background */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl animate-pulse z-0"></div>
      </section>

      {/* Experience */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 space-y-8 z-10"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Experience</h2>

        {/* Nexsales */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">Nexsales — Fullstack Developer</h3>
          <p className="text-gray-300 mb-4">Sep 2023 - Present (Mumbai)</p>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Developed RESTful APIs using Node.js & Express — +25% processing.</li>
            <li>Frontend React, Next.js, Tailwind — +30% user engagement.</li>
            <li>Unit tests 90% coverage — -40% defects.</li>
            <li>Optimized DB queries — +35% faster response.</li>
            <li>Bug fixing — +20% stability.</li>
            <li>Docker, Nginx, Auth0, Swagger, GCP, Git.</li>
          </ul>
        </div>

        {/* Carikture */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">Carikture — Web Developer</h3>
          <p className="text-gray-300 mb-4">Jan 2022 - Mar 2022 (Ghaziabad)</p>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>REST API with PHP & MySQL — +20% retrieval.</li>
            <li>Backend features PHP, JSON, JS.</li>
            <li>Maintained client sites — +10% satisfaction.</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 space-y-8"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Projects</h2>

        {/* Insurance App */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">Insurance App</h3>
          <p className="text-gray-400 mb-4">PostgreSQL, Node, Express, Docker, React, Next.js, Tailwind, Cron Job</p>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Full app: Admin, Employee, Agent, Customer.</li>
            <li>Admin: manage state, plans, agents.</li>
            <li>Employees: CRUD, feedback.</li>
            <li>Agents: add customers, policies, email.</li>
            <li>Customers: purchase plans, queries.</li>
            <li>Docker, GCP.</li>
          </ul>
        </div>

        {/* Fashion Recommendation */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">Fashion Recommendation System</h3>
          <p className="text-gray-400 mb-4">Python, Pycharm, MySQL</p>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Product recommendation website.</li>
            <li>Virtual trial room feature.</li>
            <li>Signup/login Python + MySQL.</li>
          </ul>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Languages</h3>
            <p>C++, Java, JavaScript</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Frameworks & Libraries</h3>
            <p>React, Next.js, Node.js, Express</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Databases & Tools</h3>
            <p>PostgreSQL, SQL, Docker, GCP, GitHub, VS Code</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Other</h3>
            <p>Linux, Windows, DSA, ML (basic), Debugging</p>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Education</h2>
        <p className="text-lg">B.E. in Computer Engineering — ISBM College of Engineering, Pune (2019 – 2023) — CGPA: 8.71</p>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 text-center mb-24"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Contact & Coding Profiles</h2>
        <p className="text-lg mb-2"><a href="https://leetcode.com/Rohit_69/" className="text-blue-400 hover:text-blue-300">LeetCode</a></p>
        <p className="text-lg mb-2"><a href="https://auth.geeksforgeeks.org/user/rohitverma15691" className="text-blue-400 hover:text-blue-300">GeeksforGeeks</a></p>
        <p className="text-lg mb-2"><a href="https://www.codechef.com/users/rohit1569" className="text-blue-400 hover:text-blue-300">CodeChef</a></p>
        <p className="text-lg">Email: <a href="mailto:rohitverma1569@gmail.com" className="text-blue-400 hover:text-blue-300">rohitverma1569@gmail.com</a></p>
      </motion.section>

    </main>
  )
}
