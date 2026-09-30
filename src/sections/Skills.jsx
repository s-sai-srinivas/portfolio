import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { portfolio } from "../data/portfolio";

const chipVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 16 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.05, type: "spring", stiffness: 260, damping: 18 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="My tech arsenal"
          subtitle="The tools I reach for to ship products across the stack."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: gi * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="glass-strong h-full rounded-3xl p-7" intensity={7}>
                <h3 className="font-display mb-5 text-xl font-bold text-slate-800">
                  <span className="text-gradient">{group.category}</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      custom={i}
                      variants={chipVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-40px" }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="glass cursor-default rounded-xl px-4 py-2 text-sm font-medium text-slate-700"
                      data-hover
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* scrolling tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass mt-12 overflow-hidden rounded-2xl py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...portfolio.marquee, ...portfolio.marquee].map((tech, i) => (
              <span
                key={i}
                className="font-display text-lg font-semibold text-slate-400"
              >
                {tech}
                <span className="text-gradient ml-10">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
