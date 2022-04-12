import FunctionalComponent from "./FunctionalComponent";

function App() {
  function handleBut() {
    alert("teste")
  }
  return (
    <>
      <h1>teste</h1>
      <FunctionalComponent onClick={handleBut} />
    </>
  );
}

export default App;
