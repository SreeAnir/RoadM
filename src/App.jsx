import React ,{useState } from "react";
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
  // const [selectedExample, setSelectedExample] = useState(null);

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
          {/* <p> Second Way</p>
        <ul>
        {examples.map((example) => (
          <li key={example.id}>
            <button onClick={() => setSelectedExample(example)}>
              {example.title}
            </button>
          </li>
        ))}
      </ul> */}

      {/* <p> Second Way</p>

        {selectedExample && (
        <div>
          <h2>{selectedExample.title}</h2>
          <p>{selectedExample.description}</p>
          {React.createElement(components[selectedExample.component])}
        </div>
      )} */}
        <Routes>
          <Route path="/example/:id" element={<ExamplePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
