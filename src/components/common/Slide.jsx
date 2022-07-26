import { m } from 'framer-motion';
import { useRef } from 'react';

export default function Slide() {
  const limitRef = useRef(null);

  const handleDrag = () => {
    console.log('run');
  };

  return (
    <m.div ref={limitRef} className='hero_slider'>
      <m.div
        className='cube'
        drag='x'
        dragConstraints={limitRef}
        onDragEnd={handleDrag}
        dragElastic={false}
        dragMomentum={false}
      />
    </m.div>
  );
}
