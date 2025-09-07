
import React from 'react';

interface FeedbackModalProps {
  type: 'correct' | 'incorrect';
  message: string;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ type, message, onClose }) => {
  const isCorrect = type === 'correct';
  const bgColor = isCorrect ? 'bg-green-100' : 'bg-red-100';
  const borderColor = isCorrect ? 'border-green-500' : 'border-red-500';
  const textColor = isCorrect ? 'text-green-800' : 'text-red-800';
  const buttonColor = isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`relative ${bgColor} rounded-lg shadow-2xl w-full max-w-md p-6 border-t-8 ${borderColor}`}>
        <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>
          {isCorrect ? '¡Correcto!' : 'Inténtalo de Nuevo'}
        </h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`w-full text-white font-bold py-2 px-4 rounded-lg transition-colors ${buttonColor}`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
