import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./Pages/Home"));
// const About = React.lazy(() => import("./Pages/About"));
// const Contact = React.lazy(() => import("./Pages/Contact"));
// const App = React.lazy(() => import("./App"));

function Roulette() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<App/>} /> */}
                <Route path="/" element={<Home/>} />
                {/* <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} /> */}
            </Routes>
        </Router>
    );
}

export default Roulette;