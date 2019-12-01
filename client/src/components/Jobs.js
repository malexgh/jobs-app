import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Job from './Job';
import JobsStepper from './JobsStepper';
import JobModal from './JobModal';

export default function Jobs({ jobs }) {
    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [selectedJob, setSelectedJob] = React.useState();
    const jobsPerPage = 20;
    const numPages = Math.ceil(jobs.length / jobsPerPage);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleOpen = (job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Jobs">
            <Typography variant="h4">Software Jobs</Typography>
            <Typography variant="h6">Found {jobs.length} jobs</Typography>
            {jobs.slice(activeStep * jobsPerPage, (activeStep + 1) * jobsPerPage).map(job =>
                <Job
                    job={job}
                    onClick={() => handleOpen(job)}
                    key={job.id}
                />
            )}
            <JobsStepper
                maxSteps={numPages}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
            />
            <JobModal
                open={open}
                job={selectedJob}
                handleClose={handleClose}>
            </JobModal>
        </div>
    );
}
