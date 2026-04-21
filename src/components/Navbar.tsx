import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
      >
        {/* Logo */}
        <div
          className="logo"
          style={{ fontSize: '1.4rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif", color: 'var(--secondary)', zIndex: 60 }}
        >
          CIDA <span style={{ color: 'var(--primary)', fontWeight: '300' }}>ESTÉTICA</span>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ fontWeight: '500' }}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-whatsapp" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <MessageCircle size={18} />
            Agendar Agora
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--secondary)',
            zIndex: 60,
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="nav-mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,250,248,0.97)',
          backdropFilter: 'blur(12px)',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.77,0,0.175,1)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontWeight: '600', fontSize: '1.5rem', color: 'var(--secondary)', fontFamily: "'Playfair Display', serif" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          className="btn btn-whatsapp"
          onClick={() => setMenuOpen(false)}
          style={{ padding: '14px 32px', fontSize: '1rem', marginTop: '8px' }}
        >
          <MessageCircle size={20} />
          Agendar Agora
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
