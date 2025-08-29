"use client";

import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zuveriya Khan – Designer + Developer</title>
      </Head>
      <div className="container">
        <Sidebar />
        <ThemeToggle />
        <Hero />
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #121212;
          color: #fff;
        }
        .container {
          display: flex;
          min-height: 100vh;
          background: #121212;
        }
      `}</style>
    </>
  );
}
