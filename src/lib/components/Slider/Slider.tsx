import React from 'react';
import './Slider.css';

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (val: number) => void;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  showValue = true,
  disabled = false,
  className = '',
}) => {
  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className={`nm-slider-wrapper ${className}`}>
      {(label || showValue) && (
        <div className="nm-slider-header">
          {label && <span>{label}</span>}
          {showValue && <span className="nm-slider-value">{value}</span>}
        </div>
      )}
      <div className="nm-slider-container">
        <div className="nm-slider-track">
          <div className="nm-slider-fill" style={{ width: `${percentage}%` }} />
        </div>
        <div className="nm-slider-thumb-visual" style={{ left: `${percentage}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="nm-slider-input"
        />
      </div>
    </div>
  );
};
