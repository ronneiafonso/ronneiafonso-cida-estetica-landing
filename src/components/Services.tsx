import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, Zap } from 'lucide-react';
import serviceImg from '../assets/service.png';

const services = [
  {
    icon: <Sparkles size={32} />,
    title: 'Limpeza de Pele',
    desc: 'Remoção profunda de impurezas para uma pele renovada e luminosa.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Depilação',
    desc: 'Deixe sua pele lisinha e macia, livre dos pelos.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Drenagem Linfática',
    desc: 'Redução de medidas e desintoxicação corporal com técnicas manuais.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Massagem Corporal e Modeladora',
    desc: 'Deixe seu corpo mais bonito, relaxado e sem dores.',
  },
];

const Services = () => {
  return (
    <section id="servicos">
      <div className="section-title">
        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', color: 'var(--primary)', marginBottom: '10px' }}>
          O que fazemos
        </p>
        <h2>Nossos Tratamentos</h2>
        <p>Oferecemos tratamentos em estética com resultados excepcionais.</p>
      </div>

      {/* Cards grid — auto-fit adapts to any screen width */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="glass"
            style={{
              padding: '32px 24px',
              borderRadius: '20px',
              textAlign: 'center',
              transition: 'var(--transition)',
            }}
          >
            <div style={{
              marginBottom: '16px',
              color: 'var(--primary)',
              display: 'inline-flex',
              padding: '14px',
              borderRadius: '15px',
              backgroundColor: 'var(--primary-light)',
            }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Highlight section */}
      <div className="services-highlight" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div style={{ borderRadius: '30px', overflow: 'hidden', height: '400px' }}>
          <img src={serviceImg} alt="Tratamento Especializado" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="services-highlight-text">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>
            Tratamentos <span style={{ color: 'var(--primary)' }}>Exclusivos</span> para Você
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
            Na Cida Estética, cada cliente é único. Nossos protocolos são desenvolvidos após uma avaliação minuciosa,
            garantindo que suas necessidades sejam atendidas com precisão.
          </p>
          <ul style={{ marginBottom: '30px' }}>
            {['Profissional Especializada', 'Legado de Sucesso', 'Ambiente Acolhedor', 'Resultados que Transformam'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontWeight: '500' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn btn-whatsapp">Agende uma Avaliação</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-highlight {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            margin-top: 50px !important;
          }
          .services-highlight > div:first-child {
            height: 280px !important;
          }
          .services-highlight-text h2 {
            font-size: 1.8rem !important;
          }
        }

        @media (max-width: 480px) {
          .services-highlight > div:first-child {
            height: 220px !important;
            border-radius: 20px !important;
          }
          .services-highlight-text h2 {
            font-size: 1.5rem !important;
          }
          .services-highlight-text p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
