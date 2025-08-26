import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import { Auth0Provider } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-7kgw0ls1wnahyuo8.us.auth0.com"
      clientId="4rU4WpR5bgrgU8cUMglJvpGNlD15ykgh"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/home",
      }}
    > */}
    <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
