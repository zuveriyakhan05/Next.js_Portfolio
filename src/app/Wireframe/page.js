"use client";

export default function HeroWireframe() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100">
      <aside
        className="fixed top-0 left-0 h-full w-16 bg-gray-200 flex flex-col items-center py-6 justify-between">
        <div className="flex flex-col items-center gap-10 mt-20">
          <span className="text-gray-500 text-xs" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)"
          }}>About</span>
          <span className="text-gray-500 text-xs" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)"
          }}>Skills</span>
          <span className="text-gray-500 text-xs" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)"
          }}>Projects</span>
          <span className="text-gray-500 text-xs" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)"
          }}>Contact</span>
        </div>

        <div className="flex flex-col items-center gap-5 mb-8">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </aside>

      <main className="ml-16 w-full flex items-center justify-center">
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-56 h-8 bg-gray-300 rounded mb-4"></div>
          <div className="w-44 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-60 h-4 bg-gray-200 rounded mb-4"></div>
          <div className="w-32 h-10 bg-gray-400 rounded-full"></div>
        </div>
      </main>
    </section>
  );
}
