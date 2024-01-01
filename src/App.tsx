import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckSumAddress from "./components/evm/CheckSumAddress";
import UnitConverter from "./components/evm/UnitConverter";
import 'bootstrap/dist/css/bootstrap.min.css';
import MnemonicConverter from "./components/evm/MnemonicConverter";
import HexConverter from "./components/evm/HexConverter";
import GasFeeData from "./components/evm/GasFeeData";



const routes = [
  { path: "/", element: <UnitConverter /> },
  { path: "/evm", element: <UnitConverter /> },
  { path: "/evm/unitConvert", element: <UnitConverter /> },
  { path: "/evm/checksumAddress", element: <CheckSumAddress /> },
  { path: "/evm/mnemonicConverter", element: <MnemonicConverter /> },
  { path: "/evm/hexConverter", element: <HexConverter /> },
  { path: "/evm/gasFeeData", element: <GasFeeData /> },
];


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;