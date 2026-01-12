import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import GlassButton from '../common/GlassButton';
import Carousel from '../common/Carousel';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Industriegebäude Abriss',
      category: 'abriss',
      description: 'Komplettabriss einer 5000m² Produktionshalle mit umweltgerechter Entsorgung.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
    },
    {
      id: 2,
      title: 'Wohnkomplex Entkernung',
      category: 'abriss',
      description: 'Entkernung eines 8-stöckigen Wohngebäudes für Kernsanierung.',
      image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80'
    },
    {
      id: 3,
      title: 'Büroausbau München',
      category: 'trockenbau',
      description: 'Trockenbauarbeiten für 800m² modernes Großraumbüro mit Akustikdecken.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
      id: 4,
      title: 'Einfamilienhaus Teilabriss',
      category: 'abriss',
      description: 'Präziser Teilabriss für Anbau mit Erhalt der Hauptstruktur.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    },
    {
      id: 5,
      title: 'Hotel-Innenausbau',
      category: 'trockenbau',
      description: 'Trockenbau und Schallschutz für 40 Hotelzimmer.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
    },
    {
      id: 6,
      title: 'Lagerhalle Rückbau',
      category: 'abriss',
      description: 'Selektiver Rückbau mit Materialwiederverwendung und Recycling.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Prepare cards for carousel
  const carouselCards = filteredProjects.map((project) => ({
    image: {
      src: project.image,
      alt: project.title
    },
    ...project
  }));

  const handleCardClick = (index) => {
    const project = filteredProjects[index];
    console.log('Clicked project:', project);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Referenzprojekte</h2>
          <p className={styles.sectionSubtitle}>
            Erfolgreich realisierte Projekte mit höchster Qualität und Präzision
          </p>
        </motion.div>

        {/* Carousel Component */}
        <motion.div
          className={styles.carouselContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Carousel 
            cards={carouselCards}
            cardWidth={300}
            cardHeight={200}
            cardBackground="#ffffff"
            cardBorderRadius={12}
            arrowColor="#ffffff"
            arrowHoverColor="#cccccc"
            arrowSize={32}
            backgroundColor="linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
            stackDirection="both"
            onCardClick={handleCardClick}
          />
        </motion.div>

        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          <GlassButton 
            variant={filter === 'all' ? 'primary' : 'outline'}
            onClick={() => setFilter('all')}
          >
            Alle Projekte
          </GlassButton>
          <GlassButton 
            variant={filter === 'abriss' ? 'primary' : 'outline'}
            onClick={() => setFilter('abriss')}
          >
            Abriss
          </GlassButton>
          <GlassButton 
            variant={filter === 'trockenbau' ? 'primary' : 'outline'}
            onClick={() => setFilter('trockenbau')}
          >
            Trockenbau
          </GlassButton>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className={styles.projectsGrid}
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <GlassCard variant="accent" hoverable={true}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectNumber}>#{project.id}</div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectCategory}>
                      {project.category === 'abriss' ? 'Abriss' : 'Trockenbau'}
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
