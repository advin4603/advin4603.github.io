import './ContactMe.css'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/githublogo.png'
import mail from '../assets/mail.png'
import {useParallaxController} from 'react-scroll-parallax';
import {motion} from "framer-motion";

function ContactMe() {
    const parallaxController = useParallaxController();
    const parallaxImageLoadCacheUpdate = () => parallaxController?.update();

    return (
        <section className="pageSection" id="ContactMe">
            <h1>
                Reach out to me
            </h1>
            <ul className="socials">
                <li><a href="https://www.linkedin.com/in/ayan-d-ab4870137/" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{scale: 1.1}} transition={{type: "spring" ,stiffness: 700, damping: 4}} onLoad={parallaxImageLoadCacheUpdate} src={linkedIn} alt="linkedin"/></a></li>
                <li><a href="mailto: ayan.datta@research.iiit.ac.in" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{scale: 1.1}} transition={{type: "spring" ,stiffness: 700, damping: 4}} onLoad={parallaxImageLoadCacheUpdate} src={mail} alt="email"/></a></li>
                <li><a href="https://github.com/advin4603" target="_blank" rel="noopener noreferrer"><motion.img whileHover={{scale: 1.1}} transition={{type: "spring" ,stiffness: 700, damping: 4}} onLoad={parallaxImageLoadCacheUpdate} src={github} alt="github"/></a>
                </li>
            </ul>
        </section>
    )
}

export default ContactMe;
