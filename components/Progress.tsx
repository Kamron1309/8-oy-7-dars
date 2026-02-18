import React from "react";

interface ProgressProps {
  value: number; // foiz qiymati
  color?: string; // progress bar rangi
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ 
  value, 
  color = "bg-green-500",
  className 
}) => {
  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 ${className}`}>
      <div
        className={`h-full ${color} rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      ></div>
    </div>
  );
};

export default Progress;
