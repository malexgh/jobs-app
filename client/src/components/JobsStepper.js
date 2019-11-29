import React from 'react';
import { MobileStepper, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

export default function JobsStepper({ maxSteps, activeStep, handleNext, handleBack }) {
    const theme = useTheme();

    return (
        <MobileStepper
            className="JobsStepper"
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
            }
        />
    );
}
