
import React from 'react';
import { Problem } from '../types';
import Icon from './Icon';

interface ProblemStatementProps {
  problem: Problem | null;
  levelDescription: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ problem, levelDescription }) => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg mb-4">
      {problem ? (
        <>
          <h3 className="font-bold text-lg mb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Desafío Actual: {problem.title}
          </h3>
          <p>{problem.description}</p>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg mb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            ¡Nivel Completado!
          </h3>
          <p>¡Felicidades! Has resuelto todos los problemas de este nivel. Tu finca es ahora más sostenible y productiva.</p>
        </>
      )}
    </div>
  );
};

export default ProblemStatement;
