import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CheckSumAddress from "./components/evm/CheckSumAddress";
import UnitConverter from "./components/evm/UnitConverter";
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  { path: "/", element: <UnitConverter /> },
  { path: "/evm", element: <Home /> },
  { path: "/evm/unitConvert", element: <UnitConverter /> },
  { path: "/evm/checksumAddress", element: <CheckSumAddress /> },
];


function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;




