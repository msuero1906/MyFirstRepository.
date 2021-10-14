import "./styles.css";

export default function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div style={mystyle} className="App">
      <h1 style={{ color: "red" }} style={{ backgroundColor: "lightblue" }}>
        Hello my name is Melody!
      </h1>
      <h2 style={{ color: "purple" }} style={{ backgroundColor: "green" }}>
        Year: 2021 College: CCNY
      </h2>
      <img src="https://static01.nyt.com/images/2016/08/30/nyregion/30CUNY3/30CUNY2-1472516337388-master768.jpg" />
    </div>
  );
}
