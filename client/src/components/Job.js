import React from 'react';
import { Typography, Paper } from '@material-ui/core';

export default function Job({ job }) {
    return (
        <Paper className="Job">
            <div>
                <Typography variant="h5">{job.title}</Typography>
                <Typography variant="h6">{job.company}</Typography>
                <Typography>{job.location}</Typography>
            </div>
            <div>
                <Typography>{job.created_at}</Typography>
            </div>
        </Paper>
    );
}
