import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail account
        pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
      },
    });

    const mailOptions = {
      from: email,
      to: 'info@FirsThing.earth', // Replace with your domain email
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'OK' });
    } catch (error) {
      res.status(500).json({ status: 'ERROR', error });
    }
  } else {
    res.status(405).json({ status: 'METHOD_NOT_ALLOWED' });
  }
};

export default handler;
