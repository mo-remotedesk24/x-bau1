import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Logo from '../common/Logo';
import GlassButton from '../common/GlassButton';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Logo Animation */}
        <motion.div
          className={styles.logoWrapper}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <Logo size={200} animated={true} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className={styles.brandName}>X-Bau</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Ihr Partner für Abriss und Trockenbau
        </motion.h2>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Präzise Abrissarbeiten und professioneller Trockenbau – 
          Wir setzen Ihr Projekt mit höchster Qualität und Expertise um.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <GlassButton 
            variant="primary" 
            size="large"
            onClick={scrollToContact}
          >
            Jetzt Kontakt aufnehmen
          </GlassButton>
          <GlassButton 
            variant="outline" 
            size="large"
            onClick={scrollToServices}
          >
            Unsere Leistungen
          </GlassButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToServices}
            style={{ cursor: 'pointer' }}
          >
            <FaArrowDown size={24} />
            <p>Mehr erfahren</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </section>
  );
};

export default Hero;
