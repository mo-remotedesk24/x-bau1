import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCertificate, FaUsers, FaAward } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import styles from './About.module.css';

const About = () => {
  const features = [
    { icon: <FaCheckCircle />, text: 'Über 15 Jahre Erfahrung' },
    { icon: <FaCertificate />, text: 'Zertifizierte Fachkräfte' },
    { icon: <FaUsers />, text: 'Professionelles Team' },
    { icon: <FaAward />, text: 'Höchste Qualitätsstandards' }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className={styles.sectionTitle}>Über X-Bau</h2>
        </motion.div>

        <div className={styles.content}>
          <GlassCard variant="primary" elevation="high">
            <h3>Ihr Partner für Abriss und Trockenbau</h3>
            <p>
              X-Bau steht für Präzision, Professionalität und langjährige Erfahrung 
              im Bereich Abriss und Trockenbau. Mit unserem hochqualifizierten Team 
              setzen wir Ihr Projekt termingerecht und in höchster Qualität um.
            </p>
            <p>
              Von komplexen Abrissarbeiten bis hin zu modernem Trockenbau – wir bieten 
              Ihnen maßgeschneiderte Lösungen für Ihre individuellen Anforderungen.
            </p>
            
            <div className={styles.features}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default About;
