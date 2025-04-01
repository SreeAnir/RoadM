import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { examples } from "./data/examples";
import { examplestwo } from "./data/examplestwo";
import ExamplePage from "./pages/ExamplePage";
import ExamplePageTwo from "./pages/ExamplePageTwo";
import "./App.css"; // Import CSS for styling

const App = () => {
  const [activePart, setActivePart] = useState("part1"); // "part1" or "part2"

  return (
    <Router>
      <div style={{ padding: "20px", fontSize:"13px" , fontWeight : "light" }}>
      <h1><a href="/"> Home</a></h1>
        <h1>React Code Examples</h1>
        <div style={{ padding: "20px", display:"flex",gap:"10px" }}>
        {/* Toggle Labels */}
        <h2 
           className={activePart === "part2" ? "tbactive" : "tbinactive"}
          onClick={() => setActivePart("part1")}
        >
          Part 1
        </h2>

        <h2 
           className={activePart === "part1" ? "tbactive" : "tbinactive"}
          onClick={() => setActivePart("part2")}
        >
          Part 2
        </h2>
        </div>

        {/* Conditional Rendering of Examples */}
        {activePart === "part1" && (
          <ul className="listitems">
            {examples.map((example) => (
              <li key={example.id}>
                <Link to={`/example/${example.id}/${example.title}`}>{example.title}</Link>
              </li>
            ))}
          </ul>
        )}

        {activePart === "part2" && (
          <ul className="listitems">
            {examplestwo.map((example) => (
              <li key={example.id}>
                <Link to={`/examplestwo/${example.id}/${example.title}`}>{example.title}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/example/:id/:title" element={<ExamplePage />} />
          <Route path="/examplestwo/:id/:title" element={<ExamplePageTwo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
