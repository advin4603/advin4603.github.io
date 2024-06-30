import { PropsWithChildren } from "react";

export function MenuItem({ children }: PropsWithChildren) {
  return (
    <li>
      <div className="wiggler" />
      <div className="wiggler2" />
      <div className="front">{children}</div>
      <div className="back">{children}</div>
    </li>
  );
}
