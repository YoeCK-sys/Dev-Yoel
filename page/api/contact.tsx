import React from 'react';
import nodemailer from 'nodemailer';

const ContactPage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
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
        subject: `Mensaje de ${name} desde tu sitio web, su correo es ${email}`,
        text: message
      };

      // Enviar el correo electrónico
      await transporter.sendMail(mailOptions);
      
      alert('Mensaje enviado correctamente');
    } catch (error) {
      console.error(error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
