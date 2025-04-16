
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay: string;
}

const StatCard = ({ value, label, delay }: StatCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: delay }}>
      <div className="text-4xl font-bold text-brand-600 mb-2">{value}</div>
      <div className="text-lg font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
