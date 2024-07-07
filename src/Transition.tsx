import React, { useState, useEffect, useRef } from "react";
import defaultTransitionGif from "./assets/transition.gif";
import "./Transition.css";

export function Transition({
  transitionGif = defaultTransitionGif,
  spawnDelay = 200,
  gifLength = 2000,
  timeoutDelay = 1500,
  children,
}: React.PropsWithChildren<{
  transitionGif?: string;
  spawnDelay?: number;
  timeoutDelay?: number;
  gifLength?: number;
}>) {
  const [transitioned, setTransitioned] = useState(false);
  const [rand, setRand] = useState<number | null>(null);
  const [showChildren, setShowChildren] = useState(false);
  const [timeOutInt, setTimeOutInt] = useState<number | null>(null);

  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    setTransitioned(false);
    setRand(Math.random());
    const int = setTimeout(() => {
      setTransitioned(true);
    }, timeoutDelay);
    setTimeOutInt(int);
    return () => {
      clearTimeout(int);
    };
  }, []);

  return !transitioned ? (
    <>
      <div className="introGif" style={{ zIndex: 10000 }}>
        <img
          ref={imageRef}
          src={rand !== null ? `${transitionGif}?${rand}` : transitionGif}
          alt=""
          onLoad={() => {
            if (timeOutInt) {
              clearTimeout(timeOutInt);
              setTimeOutInt(
                setTimeout(() => {
                  setTransitioned(true);
                }, gifLength)
              );
            }
            setTimeout(() => setShowChildren(true), spawnDelay);
          }}
        />
      </div>
      {showChildren ? children : null}
    </>
  ) : (
    children
  );
}
