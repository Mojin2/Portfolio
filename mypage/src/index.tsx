import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import router from "./Router";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
