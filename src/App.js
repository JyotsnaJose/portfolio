import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route exact path="/about">
            <About />
            <Footer />
          </Route>
          <Route exact path="/projects">
            <Projects />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Contact />
            <Footer />
          </Route>
          <Route path="*">
            <Error />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
