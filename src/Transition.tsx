import { useState, useEffect } from "react";

export function Transition() {
  const [transitioned, setTransitioned] = useState(true);
  const [rand, setRand] = useState<number | null>(null);
  useEffect(() => {
    setTransitioned(false);
    setRand(Math.random());
    const int = setTimeout(() => {
      setTransitioned(true);
    }, 2000);

    return () => {
      clearTimeout(int);
    };
  }, []);

  return !transitioned ? (
    <div className="introGif">
      <img
        src={
          rand !== null
            ? `./src/assets/transition.gif?${rand}`
            : "./src/assets/transition.gif"
        }
        alt=""
      />
    </div>
  ) : null;
}
