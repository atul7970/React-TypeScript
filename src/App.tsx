// import { FormEvent, useState } from "react";
// // import Box from "./components/Box";
// interface Person {
//   name: string;
//   age: number;
// }

import { useReducer } from "react";

// function App() {
//   const [user, setUser] = useState<Person>();
//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(user);
//   };
//   return (
//     <div>
//       {/* <Box label="Search" value={val} setter={setVal} /> */}
//       <form onSubmit={submitHandler}>
//         <input
//           type="number"
//           placeholder="Age"
//           value={user?.age || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
//           }
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={user?.name || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, name: e.target.value }))
//           }
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;

// ------------------------------------------------------------------------------------------------------------

// React Hook - useContext

// import { ReactNode, createContext, useState } from "react";
// import Box2 from "./components/Box2";
// type ThemeType = "light" | "dark";
// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }
// export const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   //when a custom component is allow that component to accept children as a prop

//   const [theme, setTheme] = useState<ThemeType>("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

type StateType = {
  count: number;
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: StateType = {
  count: 0,
};
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };
  const decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>Count Change</h1>
      <p>Count : {state.count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
