const Footer = () => {
  return (
    <footer style={{
      padding: '40px 5%',
      backgroundColor: 'var(--secondary)',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
        CIDA <span style={{ color: 'var(--primary)', fontWeight: '300' }}>ESTÉTICA</span>
      </div>

      <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Cida Estética. Todos os direitos reservados.
      </p>

      <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
        <a href="#" style={{ color: '#aaa' }}>Privacidade</a>
        <a href="#" style={{ color: '#aaa' }}>Termos</a>
      </div>
    </footer>
  );
};

export default Footer;
