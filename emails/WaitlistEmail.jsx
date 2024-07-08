import { Html, Head, Body, Container, Text, Button } from '@react-email/components';

export function WaitlistEmail({ name }) {
  return (
    <Html>
      <Head>
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                padding: 20px !important;
              }
            }
          `}
        </style>
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle} className="container">
          <div style={svgContainerStyle}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
              <path d="M90.5 10.644c-4.88 0-8.96 1.923-12.346 5.76l-29.4 29.4-29.4-29.4c-3.386-3.838-7.466-5.76-12.346-5.76-4.88 0-8.96 1.923-12.346 5.76L2.712 50.1c-3.386 3.838-3.386 9.614 0 13.45l29.4 29.4-29.4 29.4c-3.386 3.838-3.386 9.614 0 13.45l48 48c3.386 3.838 9.614 3.386 13.45 0l48-48 29.4-29.4 29.4 29.4c3.386 3.838 9.614 3.386 13.45 0l48-48c3.386-3.838 3.386-9.614 0-13.45l-29.4-29.4 29.4-29.4c3.386-3.838 3.386-9.614 0-13.45l-48-48zM100 100c22.089 0 40 17.911 40 40s-17.911 40-40 40-40-17.911-40-40 17.911-40 40-40z" />
            </svg>
          </div>
          <Text style={headingStyle}>Welcome to Lexicon, {name}!</Text>
          <Text style={paragraphStyle}>
            Thank you for joining our waitlist. Your interest in Lexicon means a lot to us, and we are thrilled to have you with us on this journey.
          </Text>
          <Text style={paragraphStyle}>
            Lexicon is your ultimate vocabulary enhancer, designed to be as engaging and fun as Tinder. Prepare to swipe through a plethora of words, expand your vocabulary, and impress everyone with your newfound linguistic prowess!
          </Text>
          <Button href="https://your-app-link.com" style={buttonStyle}>
            Discover More About Lexicon
          </Button>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  backgroundColor: '#ffffff',
  fontFamily: 'Helvetica, Arial, sans-serif', // Default to Helvetica, fall back to Arial and sans-serif
  margin: '0',
  padding: '0',
  width: '100%',
  height: '100%',
};

const containerStyle = {
  margin: '0 auto',
  padding: '20px',
  width: '100%',
  maxWidth: '600px',
  border: '1px solid #e5e7eb',
  boxSizing: 'border-box',
};

const svgContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const svgStyle = {
  width: '100px',
  height: '100px',
  fill: '#000000',
};

const headingStyle = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#000000',
  fontFamily: 'Times New Roman, serif', // Set Times New Roman with a fallback to serif
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#374151',
  fontFamily: 'Times New Roman, serif', // Set Times New Roman with a fallback to serif
};

const buttonStyle = {
  backgroundColor: '#000000',
  borderRadius: '5px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  width: '100%',
  padding: '12px 0',
  fontFamily: 'Helvetica, Arial, sans-serif', // Default to Helvetica, fall back to Arial and sans-serif
};

export default WaitlistEmail;
