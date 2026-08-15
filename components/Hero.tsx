"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SignalLine from "./SignalLine";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-6 pt-28 sm:pt-32 pb-16 min-h-screen flex items-center">

      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="mx-auto grid max-w-7xl w-full items-center gap-20 lg:grid-cols-2">

        <div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Software Engineering • AI • Bengaluru
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[0.95]"
          >
            <span className="whitespace-normal lg:whitespace-nowrap">
              Software Engineer.
            </span>
            <br />
            <span className="text-accent">AI Builder.</span>
            <br />
            <span className="whitespace-normal lg:whitespace-nowrap">
              Problem Solver.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6, delay: .3 }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-muted"
          >
            I'm <span className="text-text font-medium">Harsh Singh</span>,
            a final-year Electronics & Communication Engineering student at
            Sir M. Visvesvaraya Institute of Technology, Bengaluru.

            I enjoy building full-stack software, AI-powered applications,
            computer vision systems and solving real-world engineering problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6, delay: .5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="bg-accent px-6 py-3 text-black font-medium rounded-lg"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-line px-6 py-3 rounded-lg hover:border-accent transition"
            >
              Resume ↗
            </a>
          </motion.div>

          <div className="mt-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Focused On
            </p>

            <div className="space-y-3">
                {[
                "Software Engineering",
                "Artificial Intelligence",
                "Computer Vision",
                "Cybersecurity",
                ].map((item) => (
                <div
                    key={item}
                    className="flex items-center gap-3"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-lg text-text">{item}</span>
                </div>
                ))}
            </div>
            </div>
                    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6, delay: .7 }}
            className="mt-12 flex items-center gap-6 text-sm text-muted"
          >
            <a
              href="https://github.com/Harsh-1701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              GitHub ↗
            </a>

            <span>/</span>

            <a
              href="https://linkedin.com/in/harshsingh1701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              LinkedIn ↗
            </a>

            <span>/</span>

            <a
              href="mailto:harsh.s1701@gmail.com"
              className="hover:text-accent transition"
            >
              Email ↗
            </a>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex w-full justify-center lg:mt-0"
        >
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -inset-4 rounded-[32px] border border-accent/20" />

            <Image
              src="/images/harsh.jpeg"
              alt="Harsh Singh"
              width={360}
              height={450}
              priority
              className="h-auto w-full rounded-[28px] border border-line object-cover"
            />
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SignalLine />

        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
          <span>SIG · 001</span>
          <span>2026</span>
        </div>
      </div>

    </section>
  );
}