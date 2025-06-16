import { motion } from 'framer-motion';

export default function Card({ card, isFlipped, onClick }) {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      style={{
        border: '4px solid',
        borderImageSlice: 1,
        borderWidth: '4px',
        borderImageSource: 'linear-gradient(45deg, #f3ec78, #af4261)',
        borderRadius: '10px',
        cursor: 'pointer',
        perspective: '1000px',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'relative',
          width: '100px',
          height: '140px',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="card-front"
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
          }}
        >
          {card.content}
        </div>
        <div
          className="card-back"
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #af4261, #f3ec78)',
            borderRadius: '10px',
            transform: 'rotateY(180deg)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
