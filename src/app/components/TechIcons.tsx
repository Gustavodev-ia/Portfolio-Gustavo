"use client";

import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql,
  SiGit, SiPython, SiSpring, SiSpringboot
} from "react-icons/si";

import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";

const techs = [
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql,
  SiGit, SiPython, DiJava, SiSpring, SiSpringboot
];

export default function TechIcons() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950" id="tecnologias">
      <h3 className="text-3xl font-bold text-center mb-10">Linguagens & Frameworks</h3>

      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">

        {techs.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.25, rotate: 5 }}
            className="
              p-4 rounded-2xl bg-white/5 backdrop-blur-lg 
              shadow-lg border border-white/10
              hover:shadow-blue-500/50 
              transition cursor-pointer flex justify-center items-center
            "
          >
            <Icon className="text-5xl text-gray-300 hover:text-blue-400 transition" />
          </motion.div>
        ))}

      </div>
    </section>
  );
}
