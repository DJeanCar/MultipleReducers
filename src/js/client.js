import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducer";

import Layout from "./components/Layout";

let store = createStore(todoApp);

ReactDOM.render(<Layout />, document.getElementById("app"));

