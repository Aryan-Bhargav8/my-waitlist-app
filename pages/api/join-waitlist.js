import { sendEmail } from '../../lib/email';
import { addRowToSheet } from '../../lib/sheets';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name } = req.body;

    try {
      await addRowToSheet([name, email]);
      await sendEmail({
        to: email,
        name: name || 'there',
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
