
import React from 'react';
import { Level } from '../types';
import { TREE_SPECIES } from '../constants';
import TreeCard from './TreeCard';

interface TreeBankProps {
  level: Level;
}

const TreeBank: React.FC<TreeBankProps> = ({ level }) => {
  const availableTrees = TREE_SPECIES.filter(tree => level.availableTrees.includes(tree.id));

  return (
    <div>
      <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Banco de Especies</h3>
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {availableTrees.map((tree) => (
          <TreeCard key={tree.id} tree={tree} />
        ))}
      </div>
    </div>
  );
};

export default TreeBank;
