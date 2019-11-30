import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Job from './Job';
import JobsStepper from './JobsStepper';

export default function Jobs({ jobs }) {
    const [activeStep, setActiveStep] = useState(0);
    const jobsPerPage = 20;
    const numPages = Math.ceil(jobs.length / jobsPerPage);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div className="Jobs">
            <Typography variant="h4">Software Jobs</Typography>
            <Typography variant="h6">Found {jobs.length} jobs</Typography>
            {jobs.slice(activeStep * jobsPerPage, (activeStep + 1) * jobsPerPage).map(job => 
                <Job job={job} key={job.id} />
            )}
            <JobsStepper
                maxSteps={numPages}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </div>
    );
}
