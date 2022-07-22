import { domAnimation, LazyMotion } from 'framer-motion';

export default function MinMotion({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
