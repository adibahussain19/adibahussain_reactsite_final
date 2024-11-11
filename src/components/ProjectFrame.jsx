import "./stylesheets/Projects.css";

export default function ProjectFrame({name, text, image, children}) {
    return(
        <div className="project-frame">
            <div className="project-content">
                <h2 className="project-heading">{name}</h2>  
                <p className="project-text">{text}</p>
                {children}
            </div>
        
            <div className="project-img-div">
                <img src={image} alt={name} className="project-img"/>
            </div>
        </div>
    )    
}