import './Projects.css'
import placeholder from '../assets/placeholder.png'
import {Parallax} from "react-scroll-parallax";
import {useParallaxController} from 'react-scroll-parallax';
import {useEffect, useState} from "react";
import potato from '../assets/potatomessenger.png'
import sss from '../assets/sss.png'
import sengen from '../assets/sengen.png'
import tiiimeline from '../assets/tiiimeline.png'
import mess from '../assets/messAssistant.png'

const msg = "SOME OF MY PROJECTS"
const text = msg.split("");

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}


function Projects() {
    const parallaxController = useParallaxController();
    const parallaxImageLoadCacheUpdate = () => parallaxController?.update();
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const disableParallax = windowSize.innerWidth < 500;

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (<>
            <section className="pageSection" id="project-intro">

                <h1>
                    {windowSize.innerWidth > 1345 ? text.map((letter, i) => (
                        <Parallax
                            key={`copy-${i}`}
                            translateX={['0px', `${20 * (i - Math.floor(text.length / 2) + 1)}px`]}
                            className="project-intro-letter"
                        >
                            {letter != " " ? letter : " "}
                        </Parallax>

                    )) : msg}
                </h1>

            </section>
            <section className="pageSection project">
                <Parallax disabled={disableParallax} speed={-10}>
                    <div className="l">
                        <h1>Mess Assistant</h1>
                        <p>A dialogue system providing a front to the IIIT mess portal.</p>
                    </div>
                </Parallax>
                <Parallax disabled={disableParallax} speed={10}>
                    <div className="r">
                        <img onLoad={parallaxImageLoadCacheUpdate} src={mess} alt="messassistant"/>
                    </div>
                </Parallax>
            </section>
            <section className="pageSection project">
                <Parallax disabled={disableParallax} speed={-10}>
                    <div className="l"><img onLoad={parallaxImageLoadCacheUpdate} src={sengen} alt="sentence_generation"/></div>
                </Parallax>
                <Parallax disabled={disableParallax} speed={10}>
                    <div className="r"><h1>Word Prediction and Sentence Generation with NGrams </h1></div>
                </Parallax>
            </section>
            <section className="pageSection project">
                <Parallax disabled={disableParallax} speed={-10}>
                    <div className="l">
                        <h1>TIIImeline</h1>
                        <p>One-Stop destination for all IIIT-happenings.
                            Won 2nd Place  in the OSDG HackIIIT hackathon.</p>
                    </div>
                </Parallax>
                <Parallax disabled={disableParallax} speed={10}>
                    <div className="r">
                        <img onLoad={parallaxImageLoadCacheUpdate} src={tiiimeline} alt="tiiimeline"/>
                    </div>
                </Parallax>
            </section>
            <section className="pageSection project">
                <Parallax disabled={disableParallax} speed={-10}>
                    <div className="l"><img onLoad={parallaxImageLoadCacheUpdate} src={potato} alt="potatomessenger"/></div>
                </Parallax>
                <Parallax disabled={disableParallax} speed={10}>
                    <div className="r">
                        <h1>Potato Messenger</h1>
                        <p>A Chat Application built using Django, websockets, MySQL, Vanilla JS, HTML and CSS</p>
                    </div>
                </Parallax>
            </section>
            <section className="pageSection project">
                <Parallax disabled={disableParallax} speed={-10}>
                    <div className="l">
                        <h1>Slime Slayer Santa</h1>
                        <p>A 25KB sized puzzle game where you play as Santa and slay hordes of slimes. First Place in
                            IIIT-Hyd OTS-21 25KB Game Jam.</p>
                    </div>
                </Parallax>
                <Parallax disabled={disableParallax} speed={10}>
                    <div className="r"><img onLoad={parallaxImageLoadCacheUpdate} src={sss} alt="Slime Slayer Santa"/></div>
                </Parallax>
            </section>
        </>
    )
}

export default Projects
