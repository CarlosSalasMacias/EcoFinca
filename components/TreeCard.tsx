import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { TreeSpecies, EcosystemService } from '../types';
import Icon from './Icon';

interface TreeCardProps {
  tree: TreeSpecies;
}

// A separate component for the tooltip content, to be rendered in a portal.
const TooltipContent: React.FC<{ tree: TreeSpecies, rect: DOMRect | null }> = ({ tree, rect }) => {
  if (!rect) return null;

  // Calculate position for the tooltip to appear above the card
  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${rect.left + rect.width / 2}px`,
    top: `${rect.top}px`,
    transform: 'translate(-50%, -100%) translateY(-12px)', // Center horizontally, move it up completely, then add a 12px margin
    zIndex: 50, // Ensure it's on top
    width: '18rem', // w-72
  };

  return (
    <div style={style} className="p-4 bg-gray-800 text-white rounded-lg shadow-2xl animate-fade-in-down">
      <h5 className="font-bold text-lg border-b border-gray-600 pb-2 mb-2">{tree.commonName}</h5>
      <p className="text-sm mb-3">{tree.description}</p>
      <div className="text-sm space-y-1 mb-3">
        <p><span className="font-semibold">Crecimiento:</span> {tree.growthRate}</p>
        <p><span className="font-semibold">Altura Máx:</span> {tree.maxHeight}</p>
      </div>
      <h6 className="font-semibold mb-2">Servicios Ecosistémicos:</h6>
      <div className="flex flex-wrap gap-2">
        {tree.services.map(service => (
          <div key={service} className="flex items-center bg-gray-700 text-xs px-2 py-1 rounded-full">
            <Icon service={service} />
            <span className="ml-1.5">{service}</span>
          </div>
        ))}
      </div>
      {/* Arrow pointing down to the card */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
    </div>
  );
};

const TreeCard: React.FC<TreeCardProps> = ({ tree }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('treeId', tree.id);
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      setRect(cardRef.current.getBoundingClientRect());
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        ref={cardRef}
        draggable
        onDragStart={handleDragStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white p-3 rounded-lg shadow-md border border-gray-200 cursor-grab active:cursor-grabbing hover:shadow-xl hover:border-green-400 transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <img src={tree.imageUrl} alt={tree.commonName} className="w-16 h-16 rounded-full object-cover border-2 border-green-200" />
          <div>
            <h4 className="font-bold text-lg text-green-800">{tree.commonName}</h4>
            <p className="text-sm italic text-gray-500">{tree.scientificName}</p>
          </div>
        </div>
      </div>
      {isHovered && createPortal(
        <TooltipContent tree={tree} rect={rect} />,
        document.body
      )}
    </>
  );
};

export default TreeCard;
