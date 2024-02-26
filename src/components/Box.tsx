import { Dispatch, SetStateAction } from "react";
// type PropsType = {
//   heading: string;
//   count: number;
//   children: ReactNode;
//   //   func1: () => void;
// };

// function Box({ heading, count, children }: PropsType) {
//   //   func1();
//   return (
//     <div>
//       <h1>{heading}</h1>
//       <p>{count}</p>
//       {children}
//     </div>
//   );
// }

type InputValType = string | number; //assignable values

const Box = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <form>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value as T)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Box;
