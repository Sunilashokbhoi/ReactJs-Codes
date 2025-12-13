


function Project() {
    const project = [
  {
  title: "Project One",
  description : "A web application build using Reactjs",
  link : "#"
  },
  {
    title: "Project Two",
    description: "An eCommerce platform build using Django",
    link: "#"
  }
]
    return(
         <section id = 'project' className='projects-section'>
      <h2>Projects</h2>
      <div className='project-list'>
        {project.map((project, index)=> (
          <div key={index} className='project-item'>
            <h3>{project.title}</h3>
            <h3>{project.description}</h3> 
            <a href={project.link} target='_blank' rel="noonpener noreferrer" >View Project</a>  
             </div>
        ))}
      </div>
    </section>
    );
}
export default Project;