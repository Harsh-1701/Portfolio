"use client";
import { motion } from "framer-motion";
import SignalLine from "./SignalLine";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Bengaluru · Final-Year ECE · Open to Software Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tightest leading-[0.95]"
        >
          I build software. <br />
          I study <span className="font-serif italic text-accent">signals</span>. <br />
          I like difficult problems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-2xl text-lg text-muted leading-relaxed"
        >
          Harsh Singh — a final-year Electronics & Communication Engineering student
          at SMVIT, Bengaluru. I independently design and ship full-stack products.
          Most recently, <span className="text-text">EduNite</span> — an alumni-student
          mentorship platform with real-time messaging, dashboards, and AI resume feedback.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#edunite"
            className="group inline-flex items-center gap-3 bg-accent text-bg px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-text transition"
          >
            View Featured Work
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
          >
            Resume ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center gap-6 font-mono text-xs text-muted"
        >
          <a href="https://github.com/Harsh-1701" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">GitHub ↗</a>
          <span className="text-line">/</span>
          <a href="https://linkedin.com/in/harshsingh1701" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">LinkedIn ↗</a>
          <span className="text-line">/</span>
          <a href="mailto:harsh.s1701@gmail.com" className="hover:text-accent transition">Email</a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SignalLine />
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
          <span>SIG · 001</span>
          <span>SCROLL ↓</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
}