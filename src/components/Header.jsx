import { Link } from "react-router-dom";
// import MyNavbar from "./MyNavbar.jsx";
import "./stylesheets/Header.css";
// import "./stylesheets/MyNavbar.css";
import animatedImg from "../assets/animatedHeadshot.png"

export default function Header(){

    const handleDownload = () => {
        // URL of the file to be downloaded
        const fileUrl = "https://drive.google.com/file/d/1oimWHCL4LXQ6MSPbte8EgqkIGkrbno82/view?usp=sharing";
        window.open(fileUrl, '_blank');
    };


    return(
        <header className="title-section" id="#top">
            {/* <MyNavbar/> */}
                <div className="title-content">
                    <p><span className="wave">👋</span> Hello All</p>
                    <h1>I'm Adiba Hussain, Aspiring Software Engineer</h1>

                    <div className="btn-container">
                        <Link to='/projects'><button id="view-button">
                            View My Work <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.7929 15.7071C10.4024 15.3166 10.4024 14.6834 10.7929 14.2929L13.0858 12L10.7929 9.70711C10.4024 9.31658 10.4024 8.68342 10.7929 8.29289C11.1834 7.90237 11.8166 7.90237 12.2071 8.29289L14.9229 11.0087C15.4704 11.5562 15.4704 12.4438 14.9229 12.9913L12.2071 15.7071C11.8166 16.0976 11.1834 16.0976 10.7929 15.7071ZM7.75007 2.38782C9.04878 2.0992 10.6243 2 12.5 2C14.3757 2 15.9512 2.0992 17.2499 2.38782C18.56 2.67897 19.6488 3.176 20.4864 4.01358C21.324 4.85116 21.821 5.94002 22.1122 7.25007C22.4008 8.54878 22.5 10.1243 22.5 12C22.5 13.8757 22.4008 15.4512 22.1122 16.7499C21.821 18.06 21.324 19.1488 20.4864 19.9864C19.6488 20.824 18.56 21.321 17.2499 21.6122C15.9512 21.9008 14.3757 22 12.5 22C10.6243 22 9.04878 21.9008 7.75007 21.6122C6.44002 21.321 5.35116 20.824 4.51358 19.9864C3.676 19.1488 3.17897 18.06 2.88782 16.7499C2.5992 15.4512 2.5 13.8757 2.5 12C2.5 10.1243 2.5992 8.54878 2.88782 7.25007C3.17897 5.94002 3.676 4.85116 4.51358 4.01358C5.35116 3.176 6.44002 2.67897 7.75007 2.38782Z" fill="#F3F2FF"/>
                            </svg>
                        </button></Link>
                        

                        <button id="resume-download" onClick={handleDownload}>
                            Resume <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M15 20L8.75 13.75L10.5 11.9375L13.75 15.1875V5H16.25V15.1875L19.5 11.9375L21.25 13.75L15 20ZM7.5 25C6.8125 25 6.22417 24.7554 5.735 24.2663C5.24583 23.7771 5.00083 23.1883 5 22.5V18.75H7.5V22.5H22.5V18.75H25V22.5C25 23.1875 24.7554 23.7763 24.2663 24.2663C23.7771 24.7563 23.1883 25.0008 22.5 25H7.5Z" fill="#4D5566"/>
                            </svg>
                        </button>
                        
                    </div>
                    
                </div>
            
                <img className="title-image" src={animatedImg} alt="Animated Picture of Adiba Hussain" />
            
        </header>
    );
}