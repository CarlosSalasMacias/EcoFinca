
import React from 'react';

interface LevelCompleteModalProps {
  score: number;
  onNextLevel: () => void;
  onRestart: () => void;
}

const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({ score, onNextLevel, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 text-center transform scale-95 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-green-700 mb-2">¡Nivel Completado!</h2>
        <p className="text-gray-600 mb-4">Has demostrado un gran conocimiento en servicios ecosistémicos.</p>
        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <p className="text-lg text-green-800">Puntaje Final:</p>
          <p className="text-4xl font-extrabold text-green-600">{score}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Jugar de Nuevo
          </button>
           <button
            onClick={onNextLevel}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Siguiente Nivel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelCompleteModal;
