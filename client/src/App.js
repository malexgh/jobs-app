import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from './components/Jobs';

const jobsApiUrl = 'http://localhost:3333/jobs';

const fetchJobs = async (updateCallback) => {
  const res = await fetch(jobsApiUrl);
  const json = await res.json();
  updateCallback(json);
}

export default function App() {
  const [jobs, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobs} />
    </div>
  );
}
