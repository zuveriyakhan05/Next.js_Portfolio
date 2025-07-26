"use client";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">ZK</div>
      <nav>
        <ul>
          <li>Contact</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>About Me</li>
        </ul>
      </nav>
      <div className="icons">
       
        <div>🖌️</div>
        <div>🖋️</div>
        <div>⚫</div>
      </div>
      <style jsx>{`
        .sidebar {
          width: 92px;
          background: #191919;
          color: #aaa;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 0 0 0;
          min-height: 100vh;
        }
        .logo {
          font-weight: bold;
          font-size: 2.4rem;
          letter-spacing: 2px;
          margin-bottom: 60px;
        }
        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        nav li {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin: 24px 0;
          font-size: 1rem;
          cursor: pointer;
        }
        .icons {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-bottom: 18px;
        }
        .icons div {
          font-size: 1.2rem;
        }
      `}</style>
    </aside>
  );
}
