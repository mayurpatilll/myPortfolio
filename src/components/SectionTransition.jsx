import styled from 'styled-components';
import { motion } from 'framer-motion';

const TransitionSection = styled(motion.section)`
  opacity: 0;
  transform: translateY(20px);
`;

// Usage with variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}; 