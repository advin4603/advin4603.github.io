import "./MyProjects.css";
import { Transition } from "../Transition";
import Scrollbars from "react-custom-scrollbars";
import messAssistant from "../assets/messAssistant.png";
import greddiit from "../assets/greddiit.svg";

function Project({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image?: string;
  link: string;
}) {
  return (
    <div className="projectCardWrapper">
      <a className="projectCard" href={link} target="_blank">
        <h1>{title}</h1>
        {image && <img src={image} />}
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function MyProjects() {
  const projects = [
    {
      title: "Mess Assistant",
      description:
        "A dialogue system providing a front to the IIIT mess portal.",
      image: messAssistant,
      link: "https://github.com/advin4603/Mess-Assistant",
    },
    {
      title: "Greddiit",
      description:
        'A fully functional Full Stack Reddit Clone built using the MERN Stack and the NextUI UI Library. Create posts, Comment, upvote downvote Posts, Follow users, Moderate your "Subgreddiits" and view real-time stats.',
      image: greddiit,
      link: "https://github.com/advin4603/Greddiit",
    },
    {
      title: "Custom Search Engine",
      description:
        "Performant Vector-based, Boolean-based, LSI-based, and probabilistic search engines, achieving close to a 70% nDCG score evaluated on NASA documents.",
      link: "https://github.com/advin4603/CustomSearchEngine",
    },
    {
      title: "Slime Slayer Santa",
      description:
        "A puzzle game under 25KB where you play as Santa and slay hordes of slimes. First Place in the IIIT-Hyd OTS-21 25KB Game Jam",
      link: "https://github.com/advin4603/SlimeSlayerSanta",
    },
    {
      title: "Podcast QnA",
      description:
        "RAG based chatbot capable of answering questions over the Lex Fridman Podacast Trasncription.",
      link: "https://github.com/advin4603/LexFridmanGPT",
    },
    {
      title: "Potato Messenger",
      description: "A feature full instant messaging app.",
      link: "https://github.com/advin4603/Potato-Messenger",
    },
    {
      title: "For more projects",
      description: "Visit my Github",
      link: "https://github.com/advin4603",
    },
  ];
  return (
    <>
      <Transition>
        <div className="myProjects">
          <header>My Projects</header>
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
            <ul>
              {projects.map((project) => (
                <Project key={project.title} {...project} />
              ))}
            </ul>
          </Scrollbars>
        </div>
      </Transition>
    </>
  );
}
