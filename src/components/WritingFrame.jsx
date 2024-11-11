import "./stylesheets/Writing.css";

export default function WritingFrame({name, text, children}) {
    return(
        <div className="writing-frame">
            <h3>{name}</h3>
            <p>{text}</p>

            <div className="button-div">
                {children}
            </div>
        </div>
    )    
}