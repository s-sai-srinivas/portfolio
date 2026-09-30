import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="glass inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-slate-500"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-6 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-blue-600 to-teal-400"
      />
    </div>
  );
}
