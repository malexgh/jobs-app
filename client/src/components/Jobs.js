import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Job from './Job';
import JobsStepper from './JobsStepper';

export default function Jobs({ jobs }) {
    const [activeStep, setActiveStep] = useState(0);
    const jobsPerPage = 20;
    const maxSteps = Math.ceil(jobs.length / jobsPerPage);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div className="Jobs">
            <Typography variant="h4" component="h1">
                Software Jobs
            </Typography>
            {jobs.slice(activeStep * jobsPerPage, (activeStep + 1) * jobsPerPage).map(job => 
                <Job job={job} key={job.id} />
            )}
            <JobsStepper
                maxSteps={maxSteps}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </div>
    );
}
