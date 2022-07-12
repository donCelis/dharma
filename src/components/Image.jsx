import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image({...props }) {
  return (
    <LazyLoadImage
      {...props}
    />
  );
}

export default Image;
