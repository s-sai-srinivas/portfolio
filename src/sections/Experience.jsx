import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";

export default function Experience() {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="My journey as an engineer so far."
        />

        <div ref={lineRef} className="relative">
          {/* animated timeline line */}
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-slate-200 md:left-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[22px] top-0 w-px origin-top bg-gradient-to-b from-blue-600 to-teal-400 md:left-1/2"
          />

          <div className="space-y-12">
            {portfolio.experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={job.company + job.period}
                  initial={{ opacity: 0, y: 50, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex pl-16 md:w-1/2 ${
                    left ? "md:pl-0 md:pr-14" : "md:ml-auto md:pl-14"
                  }`}
                >
                  {/* node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.2 }}
                    className={`glass-strong absolute top-6 flex h-11 w-11 items-center justify-center rounded-2xl text-blue-600 shadow-lg shadow-blue-500/10 ${
                      left
                        ? "left-0 md:-right-[22px] md:left-auto"
                        : "left-0 md:-left-[22px]"
                    }`}
                  >
                    <Briefcase size={18} />
                  </motion.div>

                  <div className="glass w-full rounded-3xl p-7 transition-shadow hover:shadow-xl hover:shadow-blue-500/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                      {job.period}
                    </span>
                    <h3 className="font-display mt-2 text-lg font-bold text-slate-800">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-blue-600">
                      {job.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm leading-relaxed text-slate-500"
                        >
                          <span className="text-gradient mt-0.5">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
