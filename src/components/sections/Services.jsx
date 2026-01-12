import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHammer,
  FaBuilding,
  FaRecycle,
  FaHardHat,
  FaCube,
  FaRulerCombined,
  FaShieldAlt,
  FaTools
} from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import styles from './Services.module.css';

const Services = () => {
  const abrissServices = [
    {
      icon: <FaHammer size={40} />,
      title: 'Komplettabriss',
      description: 'Professioneller Abriss von Gebäuden aller Art mit modernster Technik und höchsten Sicherheitsstandards.'
    },
    {
      icon: <FaBuilding size={40} />,
      title: 'Teilabriss',
      description: 'Präzise Teilabbrucharbeiten für Umbauten und Renovierungen – sauber und termingerecht.'
    },
    {
      icon: <FaRecycle size={40} />,
      title: 'Entkernung',
      description: 'Fachgerechte Gebäudeentkernung mit umweltschonender Entsorgung und Recycling der Materialien.'
    },
    {
      icon: <FaHardHat size={40} />,
      title: 'Rückbau',
      description: 'Selektiver Rückbau mit Wiederverwendung wertvoller Baustoffe und nachhaltiger Materialverwertung.'
    }
  ];

  const trockenbauServices = [
    {
      icon: <FaCube size={40} />,
      title: 'Wandsysteme',
      description: 'Moderne Trockenbauwände für flexible Raumgestaltung und optimale Raumaufteilung.'
    },
    {
      icon: <FaRulerCombined size={40} />,
      title: 'Deckensysteme',
      description: 'Abgehängte Decken und Deckenbekleidungen für Schallschutz und technische Installationen.'
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Schallschutz',
      description: 'Professionelle Schallschutzlösungen für Wohn- und Gewerberäume nach DIN-Norm.'
    },
    {
      icon: <FaTools size={40} />,
      title: 'Innenausbau',
      description: 'Kompletter Innenausbau mit Rigips und modernen Trockenbausystemen.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Unsere Leistungen</h2>
          <p className={styles.sectionSubtitle}>
            Professionelle Abriss- und Trockenbauarbeiten mit höchster Qualität
          </p>
        </motion.div>

        {/* Abriss Services (Primary) */}
        <motion.div
          className={styles.categorySection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.primaryBadge}>Schwerpunkt</span>
            Abriss & Rückbau
          </h3>
          <div className={styles.servicesGrid}>
            {abrissServices.map((service, index) => (
              <GlassCard 
                key={index} 
                variant="primary" 
                hoverable={true}
                elevation="medium"
              >
                <div className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Trockenbau Services (Secondary) */}
        <motion.div
          className={styles.categorySection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className={styles.categoryTitle}>
            Trockenbau & Innenausbau
          </h3>
          <div className={styles.servicesGrid}>
            {trockenbauServices.map((service, index) => (
              <GlassCard 
                key={index} 
                variant="secondary" 
                hoverable={true}
                elevation="medium"
              >
                <div className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
