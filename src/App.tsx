import Box from "./components/Box";
function App() {
  return (
    <>
      <div>
        <Box
          heading={"Hello World"}
          count={234}
          // func1={() => {
          //   alert("LOL");
          // }}
        />
      </div>
    </>
  );
}
export default App;
