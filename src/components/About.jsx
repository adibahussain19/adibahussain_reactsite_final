import headshotImg from "../assets/headshot.jpg";
import "./stylesheets/About.css";

export default function About() {
    return (
    <section id="about">

        <div className="about-div">
            <div id="img-div"><img className="title-image" src={headshotImg} alt="A Picture of Adiba Hussain" /></div>
            
            <div className="about-content-container">
                <h1 className="section-heading"> A Little Bit About Me </h1>

                <p>
                    Hello! Welcome to my page. My name is Adiba Hussain. I am 23 years old, living in New York. 
                    I recently graduated from Barnard College of Columbia University where 
                    I received a Bachelor of Arts in Computer Science and English. <br />

                    <br />
                    I am interested in working on the user interface side of web development and expanding my back-end skills. 
                    I am proficient in Python, Java, HTML/CSS/Javascript coding languages.
                    I would love for the opportunity to pursue a career in Software Engineering and explore my passion for tech. <br />
                        
                    <br />
                    In my free time, I enjoy cooking and baking for my family and friends as well as
                    exploring new restaurants and places in NYC. 
                </p>

                <button className="about-bordered-button"><a href="#contact">Contact Me</a></button>
            </div>
        </div>
        
    </section>)
}