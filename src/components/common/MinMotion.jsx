import { domAnimation, LazyMotion } from 'framer-motion';

export default function MinMotion({ children, features = domAnimation }) {
	return <LazyMotion features={features}>{children}</LazyMotion>;
}
