import { getStoredJob } from "../utilities/fakeDB"

export const applyJobsData = async ()=> {
   const jobsData = await  fetch('/jobs.json')
   const jobs  = await jobsData.json()


   const savedJob = getStoredJob()
   let jobArray = []
   for(const id in savedJob){
       const findJob = jobs.find(job=> job.id ===id)
       if(findJob){
           const quantity = savedJob[id]
            findJob.quantity = quantity
           jobArray.push (findJob)
       }
   }
   return {jobs, jobArray };
}
