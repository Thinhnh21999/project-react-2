import "./App.css";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/about/index.jsx";
import About from "./pages/contact/index.jsx";
import Listing from "./pages/listing/Search_Popup_Map/index.jsx";
import Hotel from "./pages/hotel/index.jsx";
import Zoom from "./pages/zoom/index.jsx"
import Checkout from "./pages/checkout";

import {
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

import AuthRouter from "./router/authRouter.jsx";

function App() {
  const auth = useSelector((state) => state.Auth);
  console.log(auth);
  return (
    <div className="box-border m-0 p-0">
      {/* <AuthRouter auth></AuthRouter> */}
      <Checkout />
      <Switch>
        <Route exact path="/home" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/hotel-search-popup-map" render={Listing} />
        <Route exact path="/hotel-detail" render={Hotel} />
        <Route exact path="/zoom-detail" render={Zoom} />
        <Route exact path="/contact" render={Contact} />
      </Switch>
    </div>
  );
}

export default App;
