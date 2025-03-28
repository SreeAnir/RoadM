import React   from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { examples } from "./data/examples";
import ExamplePage from "./pages/ExamplePage";
import CounterExample from "./examples/CounterExample";
import FetchExample from "./examples/FetchExample";


const components = {
  CounterExample,
  FetchExample,
};

const App = () => {

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>React Code Examples</h1>
        <ul>
          {examples.map((example) => (
            <li key={example.id}>
              <Link to={`/example/${example.id}`}>{example.title}</Link>
            </li>
          ))}
        </ul>
         
        <Routes>
          <Route path="/example/:id" element={<ExamplePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
