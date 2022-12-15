import './FavouriteHobby.css'
import sans from '../assets/sans.png'
import link from '../assets/link.png'
import steinsgate from '../assets/steinsgate.png'
import {useParallax} from "react-scroll-parallax";
import {useParallaxController} from 'react-scroll-parallax';


function FavouriteHobby() {

    const parallaxController = useParallaxController();
    const parallaxImageLoadCacheUpdate = () => parallaxController?.update();
    const { ref: ref1 } = useParallax({rotateY: [-60, 60], rotateX: [-60, 60]});
    const { ref: ref2 } = useParallax({rotateY: [60, -60], rotateX: [-70, 50]});
    const { ref: ref3 } = useParallax({rotateY: [60, -60], rotateX: [-10, 0]});

    // @ts-ignore
    return (

        <section className="pageSection" id="FavouriteHobby">

            <h1>
                My Main Hobbies: Gaming and Anime
                <div className="imgBg">
                    <img onLoad={parallaxImageLoadCacheUpdate} src={sans} id="sans" ref={ref1} width="20%" alt=""/>
                    <img onLoad={parallaxImageLoadCacheUpdate} src={link} id="link" ref={ref2} width="30%" alt=""/>
                    <img onLoad={parallaxImageLoadCacheUpdate} src={steinsgate} id="steinsgate" ref={ref3} width="50%" alt=""/>
                </div>
            </h1>


        </section>
    )
}

export default FavouriteHobby;
