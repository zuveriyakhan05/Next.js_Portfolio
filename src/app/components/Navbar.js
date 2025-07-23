import { useState, useEffect } from "react";
import { Link } from "next/link";
import styles from "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);

const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
    { id: 'projects', label: 'Projects', icon: '📂' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'contact', label: 'Contact', icon: '✉️' }
];

useEffect(() => {
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}, [isDarkMode]);

const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
};

const toggleNav = () => {
    setIsOpen(!isOpen);
};

const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
};

return (
    <>
    <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`}
          onClick = {toggleNav}
          aria-label = "Toggle navigation" >
          </button>

          {/* Mobile */}

    <div className= {`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`} onClick={() => setIsOpen(false)} ></div>

     {/* Navbar */}

      <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Portfolio</span>
            <div className={styles.logoUnderline}></div>
          </div>

             {/* Theme Toggle */}

    <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={item.id} className={styles.navItem} style={{ animationDelay: `${index * 0.1}s` }}>
              <Link href={`#${item.id}`} className={styles.navLink}>
                <div 
                  className={`${styles.navLinkContent} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navText}>{item.label}</span>
                  <div className={styles.navIndicator}></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navFooter}>
          <div className={styles.socialLinks}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className={`${styles.contentWrapper} ${isOpen ? styles.contentShifted : ''}`}>

        {/* page content */}
        <main className={styles.mainContent}>
          <section id="home" className={styles.section}>
            <h1>Home Section</h1>
            <p>Welcome to my portfolio</p>
          </section>
          <section id="about" className={styles.section}>
            <h1>About Section</h1>
            <p>Learn more about me</p>
          </section>
          <section id="projects" className={styles.section}>
            <h1>Projects Section</h1>
            <p>Check out my work</p>
          </section>
          <section id="skills" className={styles.section}>
            <h1>Skills Section</h1>
            <p>My technical skills</p>
          </section>
          <section id="contact" className={styles.section}>
            <h1>Contact Section</h1>
            <p>Get in touch with me</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Navbar;
