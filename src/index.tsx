import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./widgets/Nav/Nav";
import Loading from "./shared/Loading/Loading";

const ResultsPage = React.lazy(() => import("./pages/ResultsPage/ResultsPage"));
const PopularPage = React.lazy(() => import("./pages/PopularPage/PopularPage"));
const BattlePage = React.lazy(() => import("./pages/BattlePage/BattlePage"));

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={theme}>
        <div className="container">
          <Nav theme={theme} toggleTheme={toggleTheme} />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<PopularPage />} />
              <Route path="/battle" element={<BattlePage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </Router>
  );
};
const rootElement = document.getElementById("app");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  throw new Error("Root element with id 'app' not found");
}
