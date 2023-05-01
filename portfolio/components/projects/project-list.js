import React from 'react'
import ProjectItem from './project-item';

function ProjectList(props) {
    const {projects} = props;
  return (
    <div className='projects_list' >
      {projects.map((project)=> (
        <ProjectItem key={project.id} title={project.title} liveUrl={project.liveUrl} id={project.id}/>
      ))}
       
    </div>
  )
}

export default ProjectList