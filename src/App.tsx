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
        >
          {"Wow Nice"}
        </Box>
      </div>
    </>
  );
}
export default App;
