
import React from 'react';

interface TutorialModalProps {
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8 transform animate-fade-in-down">
        <h2 className="text-3xl font-bold text-green-800 mb-4">¡Bienvenido a EcoFinca!</h2>
        <div className="text-gray-700 space-y-4 mb-8">
            <p>Tu misión es convertirte en un experto en agroforestería. En cada nivel, se te presentarán problemas en la finca que puedes resolver usando los <span className="font-bold text-green-600">servicios ecosistémicos</span> de los árboles.</p>
            <ol className="list-decimal list-inside space-y-2">
                <li><span className="font-semibold">Observa el problema:</span> Lee el desafío actual para entender qué necesita la finca.</li>
                <li><span className="font-semibold">Explora los árboles:</span> Pasa el cursor sobre los árboles en el "Banco de Especies" para aprender sobre sus servicios.</li>
                <li><span className="font-semibold">Arrastra y Suelta:</span> Arrastra el árbol que creas correcto y suéltalo sobre la zona del mapa con el problema.</li>
                <li><span className="font-semibold">Aprende y Gana Puntos:</span> Recibirás feedback instantáneo. ¡Elige sabiamente para maximizar tu puntaje!</li>
            </ol>
             <p>¡Buena suerte, futuro guardián de la tierra!</p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
        >
          ¡Entendido, a Jugar!
        </button>
      </div>
    </div>
  );
};

export default TutorialModal;
