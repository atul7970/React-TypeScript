import { FormEvent, useState } from "react";
// import Box from "./components/Box";
interface Person {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<Person>();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      {/* <Box label="Search" value={val} setter={setVal} /> */}
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Age"
          value={user?.age || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={user?.name || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
