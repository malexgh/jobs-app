import React from 'react';
import { Typography } from '@material-ui/core';
import Job from './Job';

export default function Jobs({ jobs }) {
    return (
        <div >
            <Typography variant="h4" component="h1">
                Software Jobs
            </Typography>
            {jobs.map(job => <Job job={job} />)}
        </div>
    );
}
