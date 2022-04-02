import { observer, inject } from "mobx-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/index";
import UseRefCon from "./ReatHooks/useRef";
import Test from "./page/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/page/test" element={<Test></Test>} />
        <Route path="/ReatHooks/useRef" element={<UseRefCon></UseRefCon>} />
      </Routes>
    </BrowserRouter>
  );
}

export default inject((store) => store)(observer(App));
