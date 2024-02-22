import { ReactNode } from "react";
type PropsType = {
  heading: string;
  count: number;
  children: ReactNode;
  //   func1: () => void;
};

function Box({ heading, count, children }: PropsType) {
  //   func1();
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children}
    </div>
  );
}

export default Box;
