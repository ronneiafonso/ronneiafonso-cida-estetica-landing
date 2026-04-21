import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
        zIndex: 2,
        width: '100%',
      }}>
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-title" style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '20px' }}>
            Realce sua <span style={{ color: 'var(--primary)' }}>Beleza Natural</span> com Elegância
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px' }}>
            Tratamentos estéticos personalizados para você se sentir ainda mais confiante e radiante.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#servicos" className="btn btn-primary">
              Nossos Serviços <ChevronRight size={20} />
            </a>
            <a href="#contato" className="btn" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>
              Saiba Mais
            </a>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-image-wrapper"
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%',
            height: '500px',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
          }}>
            <img src={heroImg} alt="Cida Estética" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="glass hero-badge" style={{
            position: 'absolute',
            bottom: '30px',
            left: '-20px',
            padding: '16px 20px',
            borderRadius: '15px',
            maxWidth: '200px',
          }}>
            <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>+200 Clientes Satisfeitas</p>
            <div style={{ display: 'flex', gap: '2px', marginTop: '5px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FFD700' }}>⭐</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background blob */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'var(--primary-light)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.3,
        zIndex: 1,
      }} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-title {
            font-size: 2.4rem !important;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-image-wrapper {
            order: -1;
          }
          .hero-image-wrapper > div:first-child {
            height: 300px !important;
          }
          .hero-badge {
            left: 10px !important;
            bottom: 10px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-image-wrapper > div:first-child {
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
