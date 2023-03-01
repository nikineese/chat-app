import React from "react";
import "./index.css";
import { withProviders } from "./providers";
import { Routing } from "../pages";
function App() {
  return <Routing />;
}

export default withProviders(App);
