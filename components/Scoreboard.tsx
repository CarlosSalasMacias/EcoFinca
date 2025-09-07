
import React from 'react';

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <div className="bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
      Puntaje: {score}
    </div>
  );
};

export default Scoreboard;
