import "./stylesheets/ProjectsPage.css";
import useFetchProjects from "../hooks/useFetchProjects";

export default function ProjectsPage(){
    const {projects, loading, error} = useFetchProjects();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return(
        <div className="projectsPage-div">
            <h1 className="section-heading">CS Projects</h1>
            {projects.map((project, index)=>(
                <div key={index} className="projectsPage-content">
                    <h2 className="project-heading">{project.title}</h2>
                    <p className="projectsPage-text">{project.description}</p>
                    {/* <p>{project.imageURL}</p> */}
                    <hr />
                </div>
            ))}
        </div>
    )

}
