"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay-bg" />
      <div className="hero-content">
        <div className="subtitle">Zuveriya Khan</div>
        <div className="main-title">Designer</div>
        <div className="secondary-title">
          <span className="plus"> + </span>
          Developer
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .overlay-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle, rgba(66,206,207,0.6) 0%, rgba(18,18,18,0.95) 80%);
          filter: blur(30px);
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          padding: 0 40px;
          max-width: 800px;
        }
        .subtitle {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 1rem;
          margin-bottom: 12px;
          color: #bbb;
        }
        .main-title {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: -1.5px;
          margin-bottom: 0.1em;
          color: #fff;
        }
        .secondary-title {
          font-size: 2.7rem;
          color: #309ea1;
          font-weight: 600;
          opacity: 0.32;
          margin-left: 8px;
        }
        .plus {
          color: #67c6c9;
        }
        @media (max-width: 600px) {
          .main-title { font-size: 2.2rem; }
          .secondary-title { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
}
