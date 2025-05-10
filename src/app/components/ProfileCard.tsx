import React from "react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="bg-slate-800/80 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-28 shadow-lg max-w-3xl mx-auto mt-8">
      {/* Avatar */}
      <div className="flex-shrink-0 relative w-24 h-24 md:mb-auto rounded-full overflow-hidden shadow-[0_8px_15px_5px_rgba(0,0,0,0.7),0_0_20px_0_rgba(0,0,0,0.4)]">
        <Image
          src="/profilePicResized.jpg"
          alt="Isak Sköld"
          fill
          className="object-cover scale-[1.375] object-top origin-top"
          priority
        />
      </div>
      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-white">Isak Sköld</h1>
        <h2 className="text-xl font-medium text-slate-300 mt-1">
          Fullstack Web Developer
        </h2>
        <p className="text-slate-400 mt-2 text-sm max-w-md mx-auto md:mx-0">
          Crafting efficient, user-focused web applications with modern
          technologies and a keen eye for detail.
        </p>
      </div>
    </div>
  );
}
