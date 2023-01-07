import ReactDOM from "react-dom/client";
import App from "./App";
import "./Scss/index.css";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import store from "./Store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Provider store={store}>
        <App />
      </Provider>
    </Provider>
  </HashRouter>
);
