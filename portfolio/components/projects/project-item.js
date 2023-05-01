import React from 'react'
import Link from 'next/link';

function ProjectItem(props) {
const {title,description,image,id,liveUrl} = props;
  
const projectLink = `/projects/${id}/`;


  return (
    <div class="project_item">
    <h2>
       {title}
    </h2>
    <p><Link href={projectLink}>Project Details</Link></p>
    <p><a href={liveUrl}>Live</a></p>
</div>
  )
}

export default ProjectItem