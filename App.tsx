
import React, { useState, useCallback, useEffect } from 'react';
import { TREE_SPECIES, GAME_LEVELS } from './constants';
import { TreeSpecies, Problem, EcosystemService, Level } from './types';
import FarmMap from './components/FarmMap';
import TreeBank from './components/TreeBank';
import Scoreboard from './components/Scoreboard';
import ProblemStatement from './components/ProblemStatement';
import FeedbackModal from './components/FeedbackModal';
import LevelCompleteModal from './components/LevelCompleteModal';
import TutorialModal from './components/TutorialModal';

const App: React.FC = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect'; message: string } | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);

  const currentLevel = GAME_LEVELS[currentLevelIndex];
  
  const isLevelComplete = currentLevel && solvedProblems.length === currentLevel.problems.length;

  const handleDrop = useCallback((treeId: string, zoneId: string) => {
    const tree = TREE_SPECIES.find(t => t.id === treeId);
    if (!tree) return;
    
    const problem = currentLevel.problems.find(p => p.zoneId === zoneId);
    if (!problem) {
      setFeedback({ type: 'incorrect', message: 'No hay un problema que resolver en esta zona.' });
      return;
    }

    if (solvedProblems.includes(problem.id)) {
      setFeedback({ type: 'incorrect', message: '¡Ya has resuelto el problema de esta zona!' });
      return;
    }

    if (tree.services.includes(problem.requiredService)) {
      setScore(s => s + 100);
      setSolvedProblems(prev => [...prev, problem.id]);
      setFeedback({ type: 'correct', message: problem.feedbackCorrect });
    } else {
      setScore(s => Math.max(0, s - 10)); // Penalización mínima
      setFeedback({ type: 'incorrect', message: problem.feedbackIncorrect });
    }
  }, [currentLevel, solvedProblems]);

  const closeFeedbackModal = () => {
    setFeedback(null);
  };

  const goToNextLevel = () => {
      // For now, we only have one level. This can be expanded.
      alert("¡Felicidades! Has completado todos los niveles disponibles.");
  };
  
  const resetLevel = () => {
      setScore(0);
      setSolvedProblems([]);
      setFeedback(null);
  };

  const activeProblem = currentLevel.problems.find(p => !solvedProblems.includes(p.id)) || null;

  return (
    <div className="min-h-screen bg-green-100/50 font-sans text-gray-800 p-4 lg:p-8">
      {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
      {feedback && <FeedbackModal type={feedback.type} message={feedback.message} onClose={closeFeedbackModal} />}
      {isLevelComplete && <LevelCompleteModal score={score} onNextLevel={goToNextLevel} onRestart={resetLevel} />}
      
      <header className="text-center mb-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-800">EcoFinca</h1>
        <p className="text-lg text-green-600">Un Simulador de Servicios Ecosistémicos</p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-green-700">{currentLevel.title}</h2>
            <Scoreboard score={score} />
          </div>
          <ProblemStatement problem={activeProblem} levelDescription={currentLevel.description} />
          <FarmMap level={currentLevel} onDrop={handleDrop} solvedProblems={solvedProblems} />
        </div>

        <aside className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg">
          <TreeBank level={currentLevel} />
        </aside>
      </main>

       <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Desarrollado como una herramienta educativa. Las imágenes de los árboles son representativas.</p>
      </footer>
    </div>
  );
};

export default App;
