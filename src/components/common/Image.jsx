import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image({ ...props }) {
	return <LazyLoadImage effect='blur' {...props} />;
}

export default Image;
