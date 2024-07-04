import { sendEmail } from '../../lib/email';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name } = req.body;

    try {
      // TODO: Add email and name to your database or service

      // Send confirmation email
      await sendEmail({
        to: email,
        name: name || 'there', // Use 'there' if no name is provided
      });

      res.status(200).json({ message: 'Successfully joined waitlist' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error joining waitlist' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}