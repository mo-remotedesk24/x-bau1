import React from 'react';
import { motion } from 'framer-motion';
import styles from './GlassButton.module.css';

const GlassButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  href,
  className = '',
  icon,
  ...props 
}) => {
  const variantClass = styles[variant];
  const sizeClass = styles[size];
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={`${styles.glassButton} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      <span className={styles.ripple}></span>
    </Component>
  );
};

export default GlassButton;
