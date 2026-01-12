import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Stacked Card Carousel Component
 * Displays cards in a 3D stacked arrangement with navigation arrows
 */
const Carousel = ({
  cards = [],
  cardWidth = 200,
  cardHeight = 200,
  cardBackground = '#FFFFFF',
  cardBorderRadius = 10,
  arrowColor = '#000000',
  arrowHoverColor = '#555555',
  arrowSize = 24,
  backgroundColor = '#6b3ad1',
  stackDirection = 'both',
  onCardClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const [isPending, startTransition] = useTransition();

  const totalCards = cards.length;

  const handleNext = () => {
    startTransition(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    });
  };

  const handlePrev = () => {
    startTransition(() => {
      setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    });
  };

  const getCardClass = (index) => {
    const diff = (index - currentIndex + totalCards) % totalCards;
    const reverseDiff = (currentIndex - index + totalCards) % totalCards;

    if (diff === 0) return 'active';

    if (stackDirection === 'both') {
      if (diff === 1) return 'next-1';
      if (diff === 2) return 'next-2';
      if (diff === 3) return 'next-3';
      if (reverseDiff === 1) return 'prev-1';
      if (reverseDiff === 2) return 'prev-2';
      if (reverseDiff === 3) return 'prev-3';
    } else if (stackDirection === 'right') {
      if (diff === 1) return 'next-1';
      if (diff === 2) return 'next-2';
      if (diff === 3) return 'next-3';
    } else if (stackDirection === 'left') {
      if (reverseDiff === 1) return 'prev-1';
      if (reverseDiff === 2) return 'prev-2';
      if (reverseDiff === 3) return 'prev-3';
    }

    return 'hidden';
  };

  const getCardStyle = (cardClass) => {
    const baseStyle = {
      width: cardWidth,
      height: cardHeight,
      backgroundColor: cardBackground,
      borderRadius: cardBorderRadius,
      boxSizing: 'border-box',
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      transition: 'all 0.5s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      cursor: onCardClick ? 'pointer' : 'default',
    };

    switch (cardClass) {
      case 'active':
        return {
          ...baseStyle,
          opacity: 1,
          zIndex: 2,
          transform: 'translateX(0)',
          filter: 'none',
        };
      case 'prev-1':
        return {
          ...baseStyle,
          opacity: 0.5,
          filter: 'blur(4px)',
          zIndex: 1,
          transform: 'translateX(-230px) rotate(-10deg) translateY(20px)',
        };
      case 'next-1':
        return {
          ...baseStyle,
          opacity: 0.5,
          filter: 'blur(4px)',
          zIndex: 1,
          transform: 'translateX(230px) rotate(10deg) translateY(20px)',
        };
      case 'prev-2':
        return {
          ...baseStyle,
          opacity: 0.2,
          filter: 'blur(6px)',
          zIndex: 1,
          transform: 'translateX(-483px) rotate(-20deg) translateY(80px)',
        };
      case 'next-2':
        return {
          ...baseStyle,
          opacity: 0.2,
          filter: 'blur(6px)',
          zIndex: 1,
          transform: 'translateX(483px) rotate(20deg) translateY(80px)',
        };
      case 'prev-3':
        return {
          ...baseStyle,
          opacity: 0,
          filter: 'blur(8px)',
          zIndex: 0,
          transform: 'translateX(-697px) rotate(-30deg) translateY(172px)',
        };
      case 'next-3':
        return {
          ...baseStyle,
          opacity: 0,
          filter: 'blur(8px)',
          zIndex: 0,
          transform: 'translateX(697px) rotate(30deg) translateY(172px)',
        };
      default:
        return {
          ...baseStyle,
          opacity: 0,
          zIndex: 0,
        };
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: cardBorderRadius,
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left Arrow */}
        <div
          style={{
            fontSize: arrowSize,
            cursor: 'pointer',
            userSelect: 'none',
            color: hoveredArrow === 'left' ? arrowHoverColor : arrowColor,
            padding: 20,
            zIndex: 20,
            transition: 'color 0.3s ease',
          }}
          onClick={handlePrev}
          onMouseEnter={() => startTransition(() => setHoveredArrow('left'))}
          onMouseLeave={() => startTransition(() => setHoveredArrow(null))}
          role="button"
          aria-label="Previous card"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handlePrev();
            }
          }}
        >
          ❮
        </div>

        {/* Cards Container */}
        <div
          style={{
            width: cardWidth,
            height: cardHeight,
            position: 'relative',
          }}
        >
          {cards.map((card, index) => {
            const cardClass = getCardClass(index);
            const { image = { src: '', alt: '' } } = card;

            return (
              <motion.div
                key={index}
                style={getCardStyle(cardClass)}
                initial={false}
                animate={cardClass}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onClick={() => onCardClick && onCardClick(index)}
              >
                {image.src && (
                  <motion.img
                    src={image.src}
                    srcSet={image.srcSet}
                    alt={image.alt || ''}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: cardBorderRadius,
                    }}
                    loading="lazy"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <div
          style={{
            fontSize: arrowSize,
            cursor: 'pointer',
            userSelect: 'none',
            color: hoveredArrow === 'right' ? arrowHoverColor : arrowColor,
            padding: 20,
            zIndex: 20,
            transition: 'color 0.3s ease',
          }}
          onClick={handleNext}
          onMouseEnter={() => startTransition(() => setHoveredArrow('right'))}
          onMouseLeave={() => startTransition(() => setHoveredArrow(null))}
          role="button"
          aria-label="Next card"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleNext();
            }
          }}
        >
          ❯
        </div>
      </div>
    </div>
  );
};

export default Carousel;
