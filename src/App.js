import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Android from "./Pages/Android/Android";
import Shop from "./Pages/Shop/Shop";
import { Layout } from "./Layout/Layout";



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>}/>
      <Route path="/android" element={<Layout><Android /></Layout>}/>
      <Route path="/Shop" element={<Layout><Shop /></Layout>} />
    </Routes>
    </>
  );
}

export default App;
