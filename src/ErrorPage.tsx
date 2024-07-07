import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import holdup from "./assets/holdup.png";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status == 404;
  return (
    <div className="errorPage">
      <div className="errorPageImageWrapper">
        <img src={holdup} alt="" />
      </div>
      <div className="errorTextWrapper">
        {is404 ? <p>This page does not exist</p> : <p>Something went wrong</p>}
      </div>
    </div>
  );
}
