"use client";

export default function Hero() {
  return (
    <section className="flex flex-col justify-between items-center py-12 px-8 min-h-screen">
      {/* Hero Text (top center) */}
      <div className="text-center">
        <h1 className="font-lobster text-6xl text-pink-400 mb-4">
        Zuveriya Khan
        </h1>
        <p className="font-Permanent Marker text-xl text-gray-400">
        Designer + Developer
        </p>
      </div>

      {/* Image pinned at the bottom */}
      <img
        src="/girl.png"
        alt="girl"
        className="w-[300px] md:w-[300px] drop-shadow-2xl rounded-2xl mx-auto"
      />
    </section>
  );
}
