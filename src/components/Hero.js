"use client";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 min-h-screen">
      {/* Hero Text (top center) */}
      <div className="text-center">
        <h1 className="font-lobster text-4xl sm:text-5xl md:text-6xl text-pink-400 mb-4">
          Zuveriya Khan
        </h1>
        <p className="font-permanent-marker text-lg sm:text-xl md:text-2xl text-gray-400">
          Designer + Developer
        </p>
      </div>
    </section>
  );
}
