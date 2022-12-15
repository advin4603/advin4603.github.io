import './EducationalBackground.css'
import bvbp from '../assets/bvbp.png'
import bvbarrs from '../assets/bvbarrs.png'
import porps from '../assets/porps.png'
import iiit from '../assets/iiit.png'
import {motion, Variant} from "framer-motion";
import {useParallaxController} from 'react-scroll-parallax';


function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0));
}


function EducationalBackground() {
    const parallaxController = useParallaxController();
    const parallaxImageLoadCacheUpdate = () => parallaxController?.update();
    const isTouch = isTouchDevice();
    const liVariants = {hover: {scale: !isTouch ? 1.1 : 1, transition: {staggerChildren: 0.5, type: "spring", stiffness: 700, damping: 4}}}
    const instituteExtraTextVariants = {
        hover: {opacity: 1},
        initial: {opacity: !isTouch ? 0 : 1}
    }
    return (
        <section className="pageSection" id="EducationalBackground">
            <h1>
                My Educational Background
            </h1>

            <ul className="education-list">
                <motion.li variants={liVariants}
                           whileHover="hover"
                           initial="initial"
                           whileTap="hover"

                >
                    <img src={bvbp} alt="bhavans panchkula"/>
                    <motion.div>
                        Bhavan Vidyalaya Panchkula
                        <motion.div
                            className="institute-extra-text"
                            variants={instituteExtraTextVariants}
                        >
                            LKG - Grade V
                        </motion.div>
                    </motion.div>
                </motion.li>
                <motion.li variants={liVariants} whileHover="hover"
                           initial="initial" whileTap="hover">
                    <img onLoad={parallaxImageLoadCacheUpdate} src={bvbarrs} alt="bhavans atmakuri"/>
                    <motion.div>
                        Bharatiya Vidya Bhavan's ARRS
                        <motion.div
                            className="institute-extra-text"
                            variants={instituteExtraTextVariants}
                        >
                            Grade VI - Grade X
                        </motion.div>
                    </motion.div>

                </motion.li>
                <motion.li variants={liVariants} whileHover="hover"
                           initial="initial" whileTap="hover">
                    <img onLoad={parallaxImageLoadCacheUpdate} src={porps} alt="obul reddy"/>
                    <motion.div>
                        DDMS P. Obul Reddy Public School
                        <motion.div
                            className="institute-extra-text"
                            variants={instituteExtraTextVariants}
                        >
                            Grade XI - Grade XII
                        </motion.div>
                    </motion.div>
                </motion.li>
                <motion.li variants={liVariants} whileHover="hover"
                           initial="initial" whileTap="hover">
                    <img onLoad={parallaxImageLoadCacheUpdate} src={iiit} alt="IIIT hyderbad"/>
                    <motion.div>
                        IIIT Hyderabad
                        <motion.div
                            className="institute-extra-text"
                            variants={instituteExtraTextVariants}
                        >
                            B.Tech in Computer Science and MS in Computational Linguistics
                        </motion.div>
                    </motion.div>
                </motion.li>
            </ul>
        </section>
    )
}

export default EducationalBackground
