import React from 'react';

interface StepperProps {
    steps: string[];
    currentStep: number;
    onStepChange: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepChange }) => {
    return (
        <div className="stepper">
            {steps.map((step, index) => (
                <>
                    <div
                        className="stepper-step"
                        key={index} onClick={() => onStepChange(index)}
                    >
                        <div className={`circle stepper-step--${index <= currentStep ? "active" : 'inactive'}`}>
                            {index <= currentStep && <div className="innerCircle" ><i className="fa-solid fa-check right"></i> </div>}
                        </div>
                        <span className="label">{step}</span>
                    </div>
                    {index < steps.length - 1 && <div className="stepper-step--line" />}
                </>
            ))}
        </div>
    );
};

export default Stepper;
