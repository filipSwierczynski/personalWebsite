import React, { Fragment } from 'react'
import { getProjectsById } from '@/project_data';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SingleEvent() {
    const router = useRouter();
    const projectId = router.query.id;
    const project = getProjectsById(projectId);
    if(!project){
        return ('<p>No project found</p>');
    }
  return (
    <Fragment>
        <div className='project_details'>
        <div className='project_details-title'>{project.title}</div>
        <div className='project_details-image'><img src={project.image}/></div>
        <div className='project_details-description'>{project.description_long}</div>
        <div className='project_details-live'><a href={project.liveUrl}>Live</a></div>

        <Link href="/projects/"> Go back</Link>
        </div>
        
        
    </Fragment>
    
  )
}

export default SingleEvent