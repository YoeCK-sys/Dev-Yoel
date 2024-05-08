import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Configurar el transporter (nodemailer)
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'contactmeclp@gmail.com',
          pass: 'ioyr tduz tyub grej'
        }
      });

      // Configurar el correo electrónico
      const mailOptions = {
        from: email,
        to: 'darkyoel75@gmail.com',
        subject: `Mensaje de ${name} desde tu sitio web de ${email}`,
        text: message
      };

      // Enviar el correo electrónico
      await transporter.sendMail(mailOptions);

      // Envío de una respuesta exitosa
      res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
      console.error(error);
      // Envío de una respuesta de error
      res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
  } else {
    // Si la solicitud no es POST, devolver un error de método no permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
