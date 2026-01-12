import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import GlassButton from '../common/GlassButton';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns baldmöglich bei Ihnen melden.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Kontakt</h2>
          <p className={styles.sectionSubtitle}>
            Nehmen Sie Kontakt mit uns auf – wir beraten Sie gerne
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Form */}
          <GlassCard variant="secondary" elevation="high">
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-input"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-input"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="glass-input"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="glass-input"
                ></textarea>
              </div>

              <GlassButton type="submit" variant="primary" size="large">
                Anfrage senden
              </GlassButton>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className={styles.info}>
            <GlassCard variant="accent" elevation="medium">
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={styles.infoIcon} />
                <div>
                  <h4>Adresse</h4>
                  <p>Musterstraße 123<br />12345 Musterstadt</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="accent" elevation="medium">
              <div className={styles.infoItem}>
                <FaPhone className={styles.infoIcon} />
                <div>
                  <h4>Telefon</h4>
                  <p>+49 (0) 123 456789</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="accent" elevation="medium">
              <div className={styles.infoItem}>
                <FaEnvelope className={styles.infoIcon} />
                <div>
                  <h4>E-Mail</h4>
                  <p>info@x-bau.de</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="accent" elevation="medium">
              <div className={styles.infoItem}>
                <FaClock className={styles.infoIcon} />
                <div>
                  <h4>Öffnungszeiten</h4>
                  <p>Mo-Fr: 08:00 - 17:00</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
