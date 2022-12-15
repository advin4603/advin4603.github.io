import './Intro.css'
import bunny from '../assets/Forest_Bunny_(Neutral).gif'
import {motion} from "framer-motion";
import {Parallax} from "react-scroll-parallax";
import {useEffect, useState} from "react";
import {useParallaxController} from 'react-scroll-parallax';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function Intro() {
    const parallaxController = useParallaxController();
    const parallaxImageLoadCacheUpdate = () => parallaxController?.update();
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const disableParallax = windowSize.innerWidth <= 500;
    return (
        <section className="pageSection" id="Intro">
            <img onLoad={parallaxImageLoadCacheUpdate} src={bunny} alt="Omori Forest Bunny"/>
            <Parallax disabled={disableParallax} translateX={[-10, 10]}>
                <div className="intro-text">

                    <motion.div animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "50%", "50%", "50%", "20%"],
                    }} transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }} className="name-circle"/>
                    <Parallax disabled={disableParallax} translateX={[20, -20]}>
                        <h1>
                            Hi, I'm Ayan Datta.
                        </h1>
                        A student at IIIT Hyderabad pursuing a dual degree in Computational Linguistics.
                    </Parallax>
                </div>
            </Parallax>
        </section>
    )
}

export default Intro;
