import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <>
        <div className="min-h-full bg-emerald-800">
          <Header />
          <div className="flex  flex-row"> 

            <Sidebar />
            <Content />

          </div>
        </div>
      </>
    </Router>
  );
}

export default App;