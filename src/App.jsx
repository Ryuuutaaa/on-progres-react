import "./App.css";
import Array from "./components/useState/Array";
import Boolean from "./components/useState/Boolean";
import NumberState from "./components/useState/Number";
import String from "./components/useState/String";

const App = () => {
  return (
    <>
      <div>
        <NumberState />
        <br />
        <br />
        <br />
        <String />
        <br />
        <br />
        <br />
        <Boolean />
        <br />
        <br />
        <br />
        <Array />
      </div>
    </>
  );
};

export default App;
