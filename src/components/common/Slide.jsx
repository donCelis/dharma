import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Slide() {
  const limitRef = useRef(null);

  const handleDrag = () => {
    console.log('run');
  };

  return (
    <motion.div ref={limitRef} className='hero_slider'>
      <motion.div
        className='cube'
        drag='x'
        dragConstraints={limitRef}
        onDragEnd={handleDrag}
        dragElastic={false}
        dragMomentum={false}
      />
    </motion.div>
  );
}
