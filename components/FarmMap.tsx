import React from 'react';
import { Level } from '../types';
import { TREE_SPECIES } from '../constants';

interface FarmMapProps {
  level: Level;
  onDrop: (treeId: string, zoneId: string) => void;
  solvedProblems: string[];
}

const FarmMap: React.FC<FarmMapProps> = ({ level, onDrop, solvedProblems }) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, zoneId: string) => {
    e.preventDefault();
    const treeId = e.dataTransfer.getData('treeId');
    if (treeId) {
      onDrop(treeId, zoneId);
    }
  };

  const getTreeForSolvedProblem = (problemId: string | undefined) => {
    if (!problemId) return null;
    const problem = level.problems.find(p => p.id === problemId);
    if (!problem) return null;
    return TREE_SPECIES.find(t => t.services.includes(problem.requiredService) && level.availableTrees.includes(t.id));
  };


  return (
    <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-200">
      <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[500px] md:h-[600px]">
        {level.farmLayout.map((zone) => {
          const problem = level.problems.find(p => p.id === zone.problemId);
          const isSolved = problem ? solvedProblems.includes(problem.id) : false;
          const solvedTree = isSolved ? getTreeForSolvedProblem(problem?.id) : null;
          const isProblemZone = problem && !isSolved;
          
          const zoneStyle = {
            gridColumn: `span ${zone.colSpan}`,
            gridRow: `span ${zone.rowSpan}`,
          };

          return (
            <div
              key={zone.id}
              id={zone.id}
              style={zoneStyle}
              className={`flex items-center justify-center p-2 rounded-md transition-all duration-300 ${zone.bgClass} relative ${isProblemZone ? 'group cursor-help' : ''}`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, zone.id)}
            >
              <span className="font-semibold text-gray-700/80 text-center text-sm md:text-base">{zone.name}</span>
              {isProblemZone && (
                <>
                  <div className="absolute inset-0 border-4 border-dashed border-yellow-500 rounded-md animate-pulse flex items-end justify-center bg-black/10 pb-2">
                    <span className="text-white bg-yellow-600 px-2 py-1 rounded text-xs font-bold">¡PROBLEMA AQUÍ!</span>
                  </div>
                  {/* Tooltip for the problem */}
                  <div className="absolute hidden group-hover:block z-20 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-xl bottom-full mb-2 left-1/2 -translate-x-1/2 transition-opacity duration-300">
                    <h4 className="font-bold border-b border-gray-600 pb-1 mb-2">{problem.title}</h4>
                    <p>{problem.description}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
                  </div>
                </>
              )}
              {isSolved && solvedTree && (
                <div className="absolute inset-0 bg-green-500/50 rounded-md flex flex-col items-center justify-center text-white p-2">
                    <img src={solvedTree.imageUrl} alt={solvedTree.commonName} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white mb-2" />
                    <span className="font-bold text-xs md:text-sm text-center">¡Solucionado!</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmMap;