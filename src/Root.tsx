import "./Root.css";
import { MenuItem } from "./MenuItem";
import { Outlet, Link } from "react-router-dom";
import bnnuy from "./assets/bnnuy.webp";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Root({ children }: React.PropsWithChildren) {
  const splitMenu = useMediaQuery({ query: "(max-width: 1440px)" });
  const [menuExpanded, setMenuExpanded] = useState(false);

  const splitMenuStyle = {
    "--menu-size": "100%",
    "--main-section-size": "100%",
    "--shift": menuExpanded ? "0" : "-100%",
    "--menu-open": "1",
  } as React.CSSProperties;

  return (
    <main className="canvas" style={splitMenu ? splitMenuStyle : undefined}>
      <section className="menu">
        <div className="menuImage">
          <img src={bnnuy} alt="" />
        </div>
        <ul>
          <MenuItem>
            <Link to={"aboutme"} onClick={() => setMenuExpanded(false)}>
              About Me
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to={"projects"} onClick={() => setMenuExpanded(false)}>
              My Projects
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"workExperience"} onClick={() => setMenuExpanded(false)}>
              Work Experience
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"contactMe"} onClick={() => setMenuExpanded(false)}>
              Contact Me
            </Link>
          </MenuItem>
        </ul>
      </section>
      <section
        className="mainSection"
        style={{ overflowX: splitMenu ? "visible" : "hidden" }}
      >
        {splitMenu ? (
          <button className="menuButton" onClick={() => setMenuExpanded(true)}>
            Menu
          </button>
        ) : null}
        <div className="mainSectionOutlet">{children ?? <Outlet />}</div>
      </section>
    </main>
  );
}

export default Root;
