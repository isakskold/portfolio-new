import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import SectionSelection from "./components/SectionSelection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Gradient background layer */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#232949] via-[#1e223a] to-[#0e1b24]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 0%, rgba(34,212,255,0.38) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 80%, rgba(139,92,246,0.28) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <ProfileCard />
          <hr className="border-t border-black my-14 md:my-20" />
          <Skills />
          <hr className="border-t border-black my-14 md:my-20" />
          <SectionSelection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
