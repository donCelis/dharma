import { m } from 'framer-motion';
import { useRef } from 'react';
import MinMotion from './MinMotion';

export default function Slide() {
  const limitRef = useRef(null);

  const handleDrag = () => {
    console.log('run');
  };

  return (
    <MinMotion>
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
    </MinMotion>
  );
}
