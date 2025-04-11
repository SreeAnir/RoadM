import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { examples } from "./data/examples";
import { examplestwo } from "./data/examplestwo";
import { examplesthree } from "./data/examplesthree";
import { experformance } from "./data/experformance";
import { reactquerdata } from "./data/reactquerdata";

import ExamplePage from "./pages/ExamplePage";
import ExamplePageTwo from "./pages/ExamplePageTwo";
import ExamplePageThree from "./pages/ExamplePageThree";
import ExPagePerformance from "./pages/ExPagePerformance";
import ReactQueryPerformance from "./pages/ReactQueryPerformance";

import AppProvider from "./AppProvider";
import "./App.css";

const App = () => {
  const [activePart, setActivePart] = useState("part1");

  const tabs = [
    { key: "part1", label: "Part 1", data: examples, path: "example", component: ExamplePage },
    { key: "part2", label: "Part 2", data: examplestwo, path: "examplestwo", component: ExamplePageTwo },
    { key: "part3", label: "Part 3", data: examplesthree, path: "examplesthree", component: ExamplePageThree },
    { key: "performance", label: "Performance", data: experformance, path: "experformance", component: ExPagePerformance },
    { key: "react-query", label: "React Query/TanStack Query", data: reactquerdata, path: "experformance", component: ReactQueryPerformance }
  ];

  const activeTab = tabs.find(tab => tab.key === activePart);

  return (
    <AppProvider>
      <Router>
        <div style={{ padding: "20px", fontSize: "13px", fontWeight: "light" }}>
          <h1><a href="/">Home</a></h1>
          <h1>React Code Examples</h1>

          {/* Tab Menu */}
          <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
            {tabs.map(tab => (
              <h2
                key={tab.key}
                className={activePart === tab.key ? "tbactive" : "tbinactive"}
                onClick={() => setActivePart(tab.key)}
              >
                {tab.label}
              </h2>
            ))}
          </div>

          {/* Active Example List */}
          <ul className="listitems">
            {activeTab?.data.map(example => (
              <li key={example.id}>
                <Link to={`/${activeTab.path}/${example.id}/${example.title}`}>{example.title}</Link>
              </li>
            ))}
          </ul>

          {/* Routes */}
          <Routes>
            {tabs.map(tab => (
              <Route
                key={tab.key}
                path={`/${tab.path}/:id/:title`}
                element={<tab.component />}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
