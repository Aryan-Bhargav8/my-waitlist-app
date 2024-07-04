import { Html, Head, Body, Container, Text, Button, Img } from '@react-email/components';

export function WaitlistEmail({ name }) {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Img
            src="https://your-logo-url.com/logo.png"
            alt="Lexicon Logo"
            width="100"
            height="100"
          />
          <Text style={headingStyle}>Welcome to Lexicon, {name}!</Text>
          <Text style={paragraphStyle}>
            Thank you for joining our waitlist. We're excited to have you on board!
          </Text>
          <Text style={paragraphStyle}>
            Lexicon is your Tinder for Vocabulary. Get ready to swipe, learn, and find words to boost your vocabulary and impress!
          </Text>
          <Button href="https://your-app-link.com" style={buttonStyle}>
            Learn More About Lexicon
          </Button>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const headingStyle = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#5b21b6', // Tailwind purple-800
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#4b5563', // Tailwind gray-600
};

const buttonStyle = {
  backgroundColor: '#8b5cf6', // Tailwind purple-500
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  width: '100%',
  padding: '12px 0',
};