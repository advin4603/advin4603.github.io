import './Interests.css'
import neuralNet from '../assets/neural_net.svg'
import nlp from '../assets/nlp.svg'
import {useParallaxController} from 'react-scroll-parallax';

function Interests() {
    const parallaxController = useParallaxController();
    const parallaxImageLoadCacheUpdate = () => parallaxController?.update();
    return (
        <section className="pageSection" id="Interests">
            <h1>My Interests</h1>
            <ul className="interest-grid">
                <li><img
                    onLoad={parallaxImageLoadCacheUpdate}
                    id="react-interest"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="react"/> Web and App Development
                </li>
                <li>
                    <img
                        onLoad={parallaxImageLoadCacheUpdate}
                        id="unity-interest"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/2560px-Unity_2021.svg.png"
                        alt="unity"/>
                    Game Development
                </li>
                <li>
                    <img
                        onLoad={parallaxImageLoadCacheUpdate}
                        id="nn-interest"
                        src={neuralNet}
                        alt="neural net"/>
                    Artificial Intelligence and Machine Learning
                </li>
                <li>
                    <img onLoad={parallaxImageLoadCacheUpdate} id="nlp-interest" src={nlp} alt="nlp"/>
                    Natural Language Processing and Computational Linguistics
                </li>
            </ul>
        </section>
    )
}

export default Interests
