import "./styles.css";

export default function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DarkOliveGreen",
    padding: "10px",
    fontFamily: "Lucida Handwriting"
  };
  return (
    <div style={mystyle} className="App">
      <h1 style={{ color: "red" }} style={{ backgroundColor: "SaddleBrown" }}>
        Hello my name is Melody!
      </h1>
      <h2
        style={{ color: "purple" }}
        style={{ backgroundColor: "SaddleBrown" }}
      >
        Year: 2021 College: CCNY
      </h2>
      <div onclick="pageLink()" class="box">
        <a href="https://art.alphacoders.com/authors/view/1093">
          Ayami Kojima Art
        </a>
      </div>

      <img src="https://static01.nyt.com/images/2016/08/30/nyregion/30CUNY3/30CUNY2-1472516337388-master768.jpg" />
    </div>
  );
}
