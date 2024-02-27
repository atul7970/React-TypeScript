// import { FormEvent, useState } from "react";
// // import Box from "./components/Box";
// interface Person {
//   name: string;
//   age: number;
// }

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

function App() {
  return <div>useReducer Hook</div>;
}

export default App;
