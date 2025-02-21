import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  padding: 6rem 2rem;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.accent};
`;

const ContactText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactText>
          Based in Pune, Maharashtra. Feel free to reach out for opportunities or just to connect!
          <br />
          Email: mayurpatil05072000@gmail.com | Phone: +91 8208675438
        </ContactText>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" required />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea required />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 