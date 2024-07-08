// pages/api/join-waitlist.js
import { addRowToSheet } from '../../lib/sheets';
import { sendEmail } from '../../lib/email';
import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

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
      console.error('Detailed error:', error);
      res.status(500).json({ message: 'Error joining waitlist', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
