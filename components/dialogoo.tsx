import React, { useEffect, useState } from 'react';

interface DialogProps {
  onClose: () => void;
}

export function Window({ onClose }: DialogProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el diálogo después de 3 segundos
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Ocultar el diálogo después de 7 segundos si aún está visible
    const hideTimer = setTimeout(() => {
      if (isVisible) {
        onClose(); // Llamada a la función onClose para ocultar el diálogo
      }
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [onClose, isVisible]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500`}
    >
      <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md text-center">
        <div className="h-12 w-12 mx-auto">
          <svg
            className="h-full w-full text-green-500"
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
    </div>
  );
}

export default Window;
