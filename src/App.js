import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
function App() {
  return (
    <Router>
      <Header />
      <Route component={Routes} />
      <Footer />
    </Router>
  );
}

export default App;
