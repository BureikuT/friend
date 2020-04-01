import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routes from "./components/routing/Routes";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <SideDrawer />
      <Route component={Routes} />

      <Footer />
    </Router>
  );
}

export default App;
