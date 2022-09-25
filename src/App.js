import "./App.css";
import { headers, data } from "./dummy/table";
import "./components/XTable.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="table" data-testid="table">
          <thead>
            <tr
              style={{
                border: "4px solid blue",
                fontSize: "17px",
                padding: "30px",
              }}
            >
              {headers.map((d, i) => {
                return <td key={i}>{d.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i} className="tr__data">
                  {Object.values(d).map((val, j) => {
                    return <td key={j}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
