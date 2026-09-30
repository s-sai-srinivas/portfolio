import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Code2, Database, Server } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { portfolio } from "../data/portfolio";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const pillars = [
  { icon: Code2, title: "Frontend", desc: "Responsive, animated, accessible UIs" },
  { icon: Server, title: "Backend", desc: "Scalable APIs & clean architecture" },
  { icon: Database, title: "Database", desc: "Modeled, indexed & optimized data" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Full-stack, end to end"
          subtitle="One engineer across the whole stack — no handoffs, no gaps."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong space-y-5 rounded-3xl p-8 md:p-10"
          >
            {portfolio.about.map((p, i) => (
              <p key={i} className="leading-relaxed text-slate-600">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 text-blue-600" size={22} />
                  <div className="text-sm font-semibold text-slate-800">{title}</div>
                  <div className="mt-1 text-[11px] leading-snug text-slate-500">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {portfolio.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TiltCard className="glass rounded-3xl p-8 text-center" intensity={9}>
                  <div className="font-display text-gradient text-4xl font-bold md:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-500">
                    {s.label}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
