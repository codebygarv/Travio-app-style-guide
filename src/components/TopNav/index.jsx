import { useEffect, useRef, useState } from 'react';
import { Plane, Palette, Sun, Moon, Layers } from 'lucide-react';
import './styles.css';

const TopNav = () => {
  const navRef = useRef(null);
  const [onDark, setOnDark] = useState(false);

  // Flip the nav to its dark variant while the dark-theme section (Section 03)
  // is the thing sitting directly beneath the bar.
  useEffect(() => {
    const section = document.getElementById('dark-flow');
    if (!section) return undefined;

    const sync = () => {
      const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 0;
      const { top, bottom } = section.getBoundingClientRect();
      setOnDark(top <= navBottom && bottom > navBottom);
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <header ref={navRef} className={`top-nav${onDark ? ' top-nav-dark' : ''}`}>

      <div className="top-nav-side">
        <a href="#hero" className="top-nav-brand">
          <span className="top-nav-mark"><Plane size={16} strokeWidth={2} /></span>
          <span className="top-nav-wordmark">
            Travio
            <span className="top-nav-sub">Design System</span>
          </span>
        </a>
      </div>

      <nav className="top-nav-links" aria-label="Section navigation">
        <a href="#style-guide">
          <Palette size={14} strokeWidth={2} />
          <span>Style Guide</span>
        </a>
        <a href="#light-flow">
          <Sun size={14} strokeWidth={2} />
          <span>Light Flow</span>
        </a>
        <a href="#dark-flow">
          <Moon size={14} strokeWidth={2} />
          <span>Dark Flow</span>
        </a>
      </nav>

      <div className="top-nav-side top-nav-side-end">
        <span className="top-nav-badge">
          <Layers size={12} strokeWidth={2.2} />
          25 Screens
        </span>
      </div>

    </header>
  );
};

export default TopNav;
