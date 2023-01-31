import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Produ } from "./components/compon";
import Layout from "./components/Layout";
import { Abaut } from "./components/Pages/abaut";
import { Home } from "./components/Pages/home";
import { NotFaund } from "./components/Pages/notFaund";
import { Praducs } from "./components/Pages/praducts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abaut" element={<Abaut />} />
        <Route path="/producs" element={<Praducs />}></Route>
        <Route path="/producs/:from" element={<Produ />} />
        <Route path="*" element={<NotFaund />} />
      </Routes>
    </Layout>
  );
}

export default App;
