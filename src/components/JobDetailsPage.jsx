import JobDetailsBody from './JobDetailsBody'
import JobDetailsHead from './JobDetailsHead'
import JobDetailsFooter from './JobDetailsFooter'
import jobs from '../../public/assets/data.json'


function JobDetailsPage({jobId}) {

  const selectedjob = jobs.find((job) => job.id === jobId);

  return (
    <>
    <JobDetailsHead selectedjob={selectedjob}/>
    <JobDetailsBody selectedjob={selectedjob}/>
    <JobDetailsFooter selectedjob={selectedjob}/>
    </>
    
  )
}

export default JobDetailsPage