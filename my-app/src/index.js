import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "https://www.npmjs.com/package/react-router-dom";
import App from './components/App';
import "./index.css"
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);