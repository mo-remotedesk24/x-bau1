import React from 'react';
import { motion } from 'framer-motion';
import styles from './GlassCard.module.css';

const GlassCard = ({ 
  children, 
  variant = 'primary', 
  hoverable = true,
  elevation = 'medium',
  className = '',
  onClick,
  ...props 
}) => {
  const variantClass = styles[variant];
  const elevationClass = styles[elevation];
  const hoverClass = hoverable ? styles.hoverable : '';

  return (
    <motion.div
      className={`${styles.glassCard} ${variantClass} ${elevationClass} ${hoverClass} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
