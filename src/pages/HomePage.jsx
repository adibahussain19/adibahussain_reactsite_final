
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Projects from "../components/Projects.jsx";
import Writing from "../components/Writing.jsx";
import Header from "../components/Header.jsx";

export default function HomePage(){
    return (
        <main>
            <Header/>
            <About />
            <Projects />
            <Writing/>
            <Contact/>
        </main>
    );
}