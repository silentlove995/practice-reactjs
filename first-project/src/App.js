import React from "react";
import "./App.css";
import LoginPage from "./pages/login-page/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClockPage from "./pages/life-circle/ClockPage";
import { ClockPageFc } from "./pages/hooks/ClockPageFc";

function App() {
  return (
    <Router>
      {/* navigation */}
      <nav>
        <ul>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/clock"}>Clock</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/clockFc"}>ClockFC</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/dashboard" element={<DashboardPage />}></Route>
        <Route exact path="/clock" element={<ClockPage/>}></Route>
        <Route exact path="/clockFc" element={<ClockPageFc/>}></Route>
      </Routes>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         Trong dep trai
//       </div>
//     )
//   }
// }

export default App;
