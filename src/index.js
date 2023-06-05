import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
//comment
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
