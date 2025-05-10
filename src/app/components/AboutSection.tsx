"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-center mb-24 max-w-xl w-full mx-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 shadow-2xl flex flex-col gap-8 border border-slate-700 w-full">
        <div className="flex flex-col items-center mb-2">
          <h2 className="text-2xl font-bold text-cyan-400 mb-1">About Me</h2>
          <p className="text-center text-slate-300 text-lg font-medium max-w-md mb-6">
            I&apos;m Isak, a 26-year-old Swedish Web Developer. After four years
            as a ventilation fitter, I returned to education with a fresh
            perspective.
          </p>
          <p className="text-center text-slate-300 text-lg font-medium max-w-md mb-6">
            My experience in construction taught me the value of building and
            creating, which seamlessly translated into web development. I
            discovered that both fields share the same fundamental principles -
            just with different tools and frameworks.
          </p>
          <p className="text-center text-slate-300 text-lg font-medium max-w-md">
            While my formal education focused on Frontend Development, I
            naturally gravitated toward Backend work, allowing me to develop a
            comprehensive full-stack mindset. This diverse background gives me a
            unique approach to problem-solving and project development.
          </p>
        </div>
        <hr className="border-slate-600 mb-2" />
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-lg font-semibold text-cyan-300 mb-2">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              React
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              Next.js
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              AWS
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              Firebase
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              API
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              Vercel
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
