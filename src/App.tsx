import './App.css'
import Intro from "./Intro/Intro";
import Interests from "./Interests/Interests";
import EducationalBackground from "./EducationalBackground/EducationalBackground";
import FavouriteHobby from "./FavouriteHobby/FavouriteHobby";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import {ParallaxProvider} from "react-scroll-parallax";
import Particles from "react-particles";
import {useCallback, useEffect} from "react";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import particleConfig from './particlesjs-config.json';
import {useOverlayScrollbars} from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import {
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin, OverlayScrollbars
} from "overlayscrollbars";

function App() {
    const [initialize, instance] = useOverlayScrollbars();
    useEffect(() => {
        initialize(document.body)
        OverlayScrollbars.plugin([SizeObserverPlugin, ClickScrollPlugin, ScrollbarsHidingPlugin]);
    }, [initialize])

    const opts = particleConfig;
    const particlesInit = useCallback(async (engine: Engine) => {
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
    // @ts-ignore
    return (
        <ParallaxProvider>

            <div className="App">
                <Intro/>
                <Interests/>
                <EducationalBackground/>
                <Projects/>
                <FavouriteHobby/>
                <ContactMe/>
                <Particles options={opts} init={particlesInit} loaded={particlesLoaded}/>
            </div>
        </ParallaxProvider>
    )
}

export default App
