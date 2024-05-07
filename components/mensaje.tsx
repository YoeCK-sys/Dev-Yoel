import { useState } from 'react';

// Importa el componente Component
import Component from '@/components/mensaje';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Simulando una solicitud de envío exitosa
      // Aquí puedes agregar la lógica para enviar el formulario
      // Si ocurre un error, puedes establecer el estado error y mostrar un mensaje de error
      setFormSubmitted(true);
      setError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      {formSubmitted ? (
        // Si formSubmitted es true, muestra el componente Component
        <Component />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="form-input rounded-lg w-full"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="form-input rounded-lg w-full"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-textarea rounded-lg w-full"
              id="message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
