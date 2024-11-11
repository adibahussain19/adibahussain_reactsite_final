import { Link } from "react-router-dom";
import WritingFrame from "./WritingFrame.jsx";
import "./stylesheets/Writing.css";

export default function Writing() {
  return (
    <section id="writing">
      <h1 className="section-heading"> Writing </h1>

      <div id="writing-intro">
        <p>
          In addition to my technical side, expressing my creativity through
          writing has always intrigued me. <br />
          As a first generation American, I fell in love with writing and the
          power words hold.
        </p>
        <p>Here are a few writing samples: </p>
      </div>

      <div id="writing-frame-div">
        <WritingFrame
          name="Mirrored Language in Shakespeare’s The Rape of Lucrece"
          text="Summary: For my final college thesis paper, I explore 
                                the rhetorical technique of the parallel usage of words, 
                                phrases, and images between Tarquin in the first half of the 
                                poem and Lucrece in the latter half, to show how Lucrece is 
                                an author of her own history, in that her mirrored language both 
                                laments a loss of power as well as reclaims this power."
        >
          <Link to="https://docs.google.com/document/d/1KC-zJf4nz_8f2mnvybnqLqbLT6RsM86FI7ry_WYFZ8Q/edit?usp=sharing">
            <button>Read Full Story</button>
          </Link>
        </WritingFrame>

        <WritingFrame
          name="Explosion"
          text="Preview: “‘You hiding a bomb underneath that thing on your head?’ 
                                ‘You wanna come and check?’ What if I had actually said that to the 
                                guy on the empty train who uttered those words while I was minding 
                                my business trying to get to my first period Earth Science class?”"
        >
          <Link to="https://drive.google.com/file/d/1XHMvP3MrY0XYsikBlQDjQb87ws2OTyFt/view">
            <button>Read Full Story</button>
          </Link>
        </WritingFrame>

        <WritingFrame
          name="Sinking"
          text="Preview: “Sinking. All I can think about is sinking. Drowning in the water. Drowning in my fears.
                                        Drowning in their hopes and dreams....
                                        My hands clung to the makeshift floaty that my family
                                        had made to help me learn how to swim. Empty water gallons tied to a rope and attached to my
                                        waist were to be my saviors, my entire lifeline...."
        >
          <Link to="https://drive.google.com/file/d/1lMOuAGRbKq25XH27zpO43l5yOFaYLNmr/view">
            <button>Read Full Story</button>
          </Link>
        </WritingFrame>

        <WritingFrame
          name="From the Bold. Beautiful. Barnard Blog"
          text="Preview: “The college application process can be one of the most 
                                daunting things a high schooler can go through. To me, it felt like 
                                everything I had done in high school had built up to the moment where 
                                I would actually start my application and submit it. Coming from an 
                                immigrant household, college was the expectation from my parents.”"
        >
          <Link to="https://www.boldbeautifulbarnard.com/unafraid-at-barnard/2020/3/30/why-i-chose-barnard">
            <button>Read Full Story</button>
          </Link>
        </WritingFrame>
      </div>

      <div className="readMore">
        <Link to="/writing">
          <button>
            Read More Samples{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="30"
              viewBox="0 0 12 30"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.157 15.8887L4.5 22.96L3.086 21.1925L8.036 15.005L3.086 8.81749L4.5 7.04999L10.157 14.1212C10.3445 14.3556 10.4498 14.6735 10.4498 15.005C10.4498 15.3364 10.3445 15.6543 10.157 15.8887Z"
                fill="#4D5566"
              />
            </svg>{" "}
          </button>
        </Link>
      </div>
    </section>
  );
}
