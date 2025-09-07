
import React from 'react';
import { EcosystemService } from '../types';

interface IconProps {
  service: EcosystemService;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ service, className = "w-4 h-4" }) => {
  const renderIcon = () => {
    switch (service) {
      case EcosystemService.NITROGEN_FIXING:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 12L3 20m4-4l4 4m6-12v12m0-12L21 4m-4 4l-4-4" /></svg>
        );
      case EcosystemService.EROSION_CONTROL:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        );
      case EcosystemService.TIMBER:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4v16h14V4M5 4c0-1.1.9-2 2-2h10a2 2 0 012 2M5 4h14m-7 4v8" /></svg>
        );
      case EcosystemService.FOOD:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4 2 2 0 000-4zm0 0a2 2 0 110 4 2 2 0 010-4zm0 0v2m0 8v2m0-2a2 2 0 100 4 2 2 0 000-4zm0 0a2 2 0 110 4 2 2 0 010-4zm0 0v2m6-6h2m-2 0a2 2 0 104 0 2 2 0 00-4 0zm0 0a2 2 0 114 0 2 2 0 01-4 0zm0 0h-2m-8 8H4m2 0a2 2 0 10-4 0 2 2 0 004 0zm0 0a2 2 0 11-4 0 2 2 0 014 0zm0 0h2" /></svg>
        );
      case EcosystemService.WATER_PROTECTION:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0115.357-2m0 0H15" /></svg>
        );
      case EcosystemService.SHADE:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2l-7 7-7-7M19 10v10a1 1 0 01-1 1h-3" /></svg>
        );
      default:
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        );
    }
  };
  return renderIcon();
};

export default Icon;
