import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignUpOne from "./pages/SignUpOne";
import SignUpTwo from "./pages/SignUpTwo";
import SignUpThree from "./pages/SignUpThree";
import SignUpFour from "./pages/SignUpFour";
import SignUpFive from "./pages/SignUpFive";
import SignInOne from "./pages/SignInOne";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup-one" element={<SignUpOne/>} />
          <Route path="/signup-two" element={<SignUpTwo/>} />
          <Route path="/signup-three" element={<SignUpThree/>} />
          <Route path="/signup-four" element={<SignUpFour/>} />
          <Route path="/signup-five" element={<SignUpFive/>} />
          <Route path="/signin-one" element={<SignInOne/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
