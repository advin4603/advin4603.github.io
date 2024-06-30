import "./AboutMe.css";
import { Scrollbars } from "react-custom-scrollbars";

function AboutMe() {
  return (
    <div className="aboutMe">
      <header style={{ zIndex: 5, position: "relative" }}>
        <svg
          width="50%"
          style={{ marginLeft: "2%", translate: "0 15%", overflow: "visible" }}
          viewBox="0 0 315 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dialogueTop"
        >
          <path
            fill="white"
            stroke="black"
            strokeWidth="1.5%"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            transform="translate(110 47) rotate(-15)"
            fill="black"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre", fontWeight: "bold" }}
            font-family="Arsenal"
            font-size="200%"
            letter-spacing="0em"
          >
            <tspan
              x="20%"
              y="20%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              About Me
            </tspan>
          </text>
        </svg>
      </header>
      <section
        className="text-section-container"
        style={{
          marginBottom: "2em",
          marginRight: "5%",
          marginLeft: "18%",
          padding: 10,
          backgroundColor: "black",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="whiteOutline" />

        <div className="blackOutline" />
        <svg
          width="30%"
          className="sideDialogue whiteSideDialogue"
          viewBox="0 0 136 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            stroke="black"
            strokeWidth="3%"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="30%"
          className="sideDialogue blackSideDialogue"
          viewBox="0 0 136 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="black" />
        </svg>
        {/* <svg
          className="blackSide"
          width="30%"
          viewBox="0 0 107 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 24.5L38 0L81.5 19L106.5 71L56.5 27L39.5 44L0 14.5L29.5 24.5Z"
            fill="black"
          />
        </svg>
        <svg
          width="28%"
          className="whiteSide"
          viewBox="0 0 136 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 30L55.5 0L100 26L135.5 103L80.5 58.5L65 71.5L0 20L52 30Z"
            fill="white"
          />
        </svg> */}

        <Scrollbars
          style={{ height: "40vh" }}
          className="text-section"
          renderThumbHorizontal={({ style, ...props }) => (
            <div style={{ ...style, backgroundColor: "white" }} {...props} />
          )}
          renderThumbVertical={({ style, ...props }) => (
            <div
              style={{
                ...style,
                backgroundColor: "white",
              }}
              {...props}
            />
          )}
          renderView={({ style, ...props }) => (
            <div
              className="box"
              style={{
                ...style,
                paddingRight: 15,
                paddingLeft: "5%",
              }}
              {...props}
            />
          )}
        >
          <div>Hey!</div>
          <div>
            I am Ayan Datta, a student at IIIT-Hyderabad pursuing Computational
            Linguistics and an Undergraduate Researcher at LTRC-IIITH.
          </div>
        </Scrollbars>
      </section>
    </div>
  );
}

export default AboutMe;
