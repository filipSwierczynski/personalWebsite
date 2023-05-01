import React from 'react';
import ProjectList from '@/components/projects/project-list';
import { getAllProjects } from '@/project_data';

const ProjectsPage = () => {
    const projects = getAllProjects();
    return (
        <>
        <ProjectList projects={projects}/>
    </>
    )
    
}

export default ProjectsPage;