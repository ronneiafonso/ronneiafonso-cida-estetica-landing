import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" style={{ backgroundColor: 'white', borderRadius: '50px 50px 0 0' }}>
      <div className="section-title">
        <h2>Entre em Contato</h2>
        <p>Estamos ansiosos para cuidar de você. Fale conosco através de um de nossos canais.</p>
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Info card */}
        <div className="glass" style={{ padding: '40px', borderRadius: '30px' }}>
          <h3 style={{ marginBottom: '30px' }}>Agende sua Visita</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', color: 'var(--primary)', flexShrink: 0 }}>
                <Phone size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Telefone</p>
                <p style={{ fontWeight: '600' }}>(27) 99614-6521</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', color: 'var(--primary)', flexShrink: 0 }}>
                <Mail size={22} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>E-mail</p>
                <p style={{ fontWeight: '600', wordBreak: 'break-all' }}>cidaestetica444@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', color: 'var(--primary)', flexShrink: 0 }}>
                <MapPin size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Localização</p>
                <p style={{ fontWeight: '600' }}>Travessa Canindé, 32 — São Pedro, Vitória - ES</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '36px' }}>
            <p style={{ marginBottom: '14px', fontWeight: '500' }}>Siga-nos:</p>
            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href="https://www.instagram.com/est.cida"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '10px', backgroundColor: '#E1306C', color: 'white', borderRadius: '50%', display: 'inline-flex' }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px 0' }}>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            marginBottom: '28px',
            boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)',
            flexShrink: 0,
          }}>
            <MessageCircle size={48} />
          </div>
          <h2 style={{ marginBottom: '16px', fontSize: '1.8rem' }}>
            Atendimento via <span style={{ color: '#25D366' }}>WhatsApp</span>
          </h2>
          <p style={{ marginBottom: '28px', maxWidth: '380px', color: 'var(--text-muted)' }}>
            Clique no botão abaixo para falar diretamente com nossa consultora e tirar todas as suas dúvidas em tempo real.
          </p>
          <a
            href="https://wa.me/5527996146521"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '18px 36px', fontSize: '1.1rem' }}
          >
            <MessageCircle size={22} />
            Conversar Agora
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          #contato {
            border-radius: 30px 30px 0 0 !important;
          }
        }

        @media (max-width: 480px) {
          #contato {
            border-radius: 20px 20px 0 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
