import Scrollbars from "react-custom-scrollbars";
import { Transition } from "../Transition";
import battleTransition from "../assets/battleTransition.gif";
import "./WorkExperience.css";

export default function WorkExperience() {
  return (
    <Transition transitionGif={battleTransition} spawnDelay={300}>
      <div className="workExperience">
        <h1>Work Experience</h1>
        <Scrollbars
          style={{ height: "100%" }}
          renderThumbVertical={({ style, ...props }) => (
            <div
              className="thumb-vertical"
              style={{
                ...style,
                backgroundColor: "white",
                width: "100%",
                border: "solid black 2px",
              }}
              {...props}
            />
          )}
          renderTrackVertical={({ style, ...props }) => (
            <div
              style={{
                ...style,
                width: 10,
                right: 10,
                bottom: 2,
                top: 2,
                borderRadius: 3,
              }}
              {...props}
              className="track-vertical"
            />
          )}
          renderView={({ style, ...props }) => (
            <div
              className="view"
              style={{
                ...style,
                paddingRight: 25,
                paddingBottom: "20px",
              }}
              {...props}
            />
          )}
        >
          <ul className="experiences">
            <li>
              <h1>Bosch Global Software Technologies - Bangalore, India</h1>
              <h3>NLP Research Intern</h3>
              <h5>June 2024 - July 2024</h5>
              <p>
                Performed extensive research, built evaluation pipelines, and
                developed models using advanced NLP techniques, achieving a 15%
                improvement in state-of-the-art results for the Google research
                FRUIT task.
              </p>
            </li>
            <li>
              <h1>Language Technologies Research Centre - Hyderabad, India</h1>
              <h3>Undergraduate Researcher</h3>
              <h5>March 2023 - Present</h5>
              <p>
                Conducting in-depth research on language models and their
                applications in natural language processing (NLP), utilizing
                advanced techniques and methodologies to contribute to the
                advancement of NLP research, with a strong focus on leveraging
                language models as primary tools.
              </p>
            </li>
            <li>
              <h1>Arka Aerospace - Hyderabad, India</h1>
              <h3>SWE and ML Intern</h3>
              <h5>January 2023 - August 2023</h5>
              <p>
                Built performant and secure user interfaces for anti-drone and
                swarm-drone systems using modern technologies like Rust and
                TypeScript. Designed and integrated an end-to-end object
                detection computer vision (CV) pipeline for UAVs, achieving a
                state-of-the-art 98% accuracy on runway debris classification,
                and deployed the scalable system at Bakshi ka Talab Airforce
                base.
              </p>
            </li>
            <li>
              <h1>IIIT Hyderabad - Hyderabad, India</h1>
              <h3>Teaching Assistant</h3>
              <h5>August 2023 - June 2024</h5>
              <p>
                From January 2024 to June 2024, led a team of 7 teaching
                assistants to manage a 200-student course on Introduction to
                NLP. Designed NLP assignments, led tutorial sessions, and
                facilitated the understanding of complex topics. From August
                2023 to December 2023, conducted tutorials and designed
                challenging assignments for a computer programming course.
              </p>
            </li>
          </ul>
        </Scrollbars>
      </div>
    </Transition>
  );
}
