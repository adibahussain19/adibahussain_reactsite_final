import "./stylesheets/ProjectsPage.css";
import useFetchWriting from '../hooks/useFetchWriting';

export default function WritingPage() {
    const { writings, loading, error } = useFetchWriting();
    console.log("writings", writings);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="projectsPage-div">
            <h1 className="section-heading">Writing Samples</h1>
            {writings.map((writing, index) => (
                <div key={index} className="writing-item">
                    <h2 className="project-heading" >{writing.title}</h2>
                    <p className="projectsPage-text" >{writing.summary}</p>
                    <a href={writing.fileLink}>Read More</a>
                    <hr />
                </div>
            ))}
        </div>
    );

};
