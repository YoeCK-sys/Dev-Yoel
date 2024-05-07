import React, { useState } from 'react';

export default function ContactForm() {
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el envío automático del formulario
    // Submit form logic
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsMessageSent(true);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md rounded-lg bg-gray-900 p-6 text-center shadow-lg dark:bg-gray-800">
      {!isMessageSent ? (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-12 w-12 text-green-500">
            <svg
              className="h-full w-full"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 12.75L11.25 15 15 9.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-gray-50">MENSAJE ENVIADO CORRECTAMENTE</h2>
            <p className="text-sm text-gray-400">Tu mensaje se ha enviado con éxito.</p>
          </div>
        </div>
      )}
    </div>
  );
}
