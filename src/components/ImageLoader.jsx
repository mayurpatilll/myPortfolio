import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const LoadingOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${props => props.theme.colors.secondary},
    transparent
  );
`; 