import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`; 