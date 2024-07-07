import { Transition } from "../Transition";
import paperTransition from "../assets/paperTransition.gif";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <>
      <Transition transitionGif={paperTransition}>
        <div className="contactMe">
          <h1>Contact Me</h1>
          <div className="contactLinks">
            <a href="https://www.linkedin.com/in/ayandatta4603/">
              <img src={linkedIn} alt="Linked In" />
            </a>
            <a href="https://github.com/advin4603">
              <img src={github} alt="Github" />
            </a>
            <a href="mailto:ayan.datta@research.iiit.ac.in">
              <img src={mail} alt="Email" />
            </a>
          </div>
        </div>
      </Transition>
    </>
  );
}
