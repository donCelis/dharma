import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image({ ...props }) {
	return <LazyLoadImage effect='opacity' {...props} />;
}

export default Image;
