import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "../components/icons";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Selected work across the full stack."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {portfolio.projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (i % 2) * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ perspective: 1000 }}
            >
              <TiltCard className="glass-strong h-full overflow-hidden rounded-3xl">
                {/* gradient header */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${p.gradient} p-6`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
                  <FolderGit2
                    className="absolute bottom-5 left-6 text-white/90"
                    size={36}
                  />
                  <div className="absolute right-5 top-5 flex gap-2">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, rotate: -6 }}
                      className="rounded-xl bg-white/25 p-2.5 text-white backdrop-blur-sm"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={17} />
                    </motion.a>
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      className="rounded-xl bg-white/25 p-2.5 text-white backdrop-blur-sm"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={17} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-blue-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noreferrer"
            className="glass-strong inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-slate-700 transition-transform hover:scale-105"
          >
            <GithubIcon size={18} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
