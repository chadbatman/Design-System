import React from "react";
import "./StepperStep.css";

export interface StepperStepProps {
  label: string;
  stepNumber?: number;
  state?: "complete" | "active" | "upcoming";
}

export const StepperStep: React.FC<StepperStepProps> = ({
  label,
  stepNumber,
  state = "upcoming",
}) => {
  return (
    <div className="stepper-step">
      <div className={`stepper-step__circle stepper-step__circle--${state}`}>
        {state === "complete" ? (
          <span className="stepper-step__check">✓</span>
        ) : (
          <span className="stepper-step__number">{stepNumber}</span>
        )}
      </div>
      <span className={`stepper-step__label stepper-step__label--${state}`}>
        {label}
      </span>
    </div>
  );
};
