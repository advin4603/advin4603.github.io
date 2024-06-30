import "./Root.css";
import { MenuItem } from "./MenuItem";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <main className="canvas">
      <section className="menu">
        <div className="menuImage">
          <img src="./src/assets/bnnuy.webp" alt="" />
        </div>
        <ul>
          <MenuItem>
            <Link to={"aboutme"}>About Me</Link>
          </MenuItem>

          <MenuItem>
            <Link to={"projects"}>My Projects</Link>
          </MenuItem>
          <MenuItem>Work Experience</MenuItem>
        </ul>
        <div className="menuBottom">
          <img src="./src/assets/bnnuy.webp" alt="" />
        </div>
      </section>
      <section className="mainSection">
        <Outlet />
      </section>
    </main>
  );
}

export default Root;
