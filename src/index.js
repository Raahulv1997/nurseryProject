import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/component/css-js/css/index.css";
import "../src/component/css-js/css/main.css";
import "../src/component/css-js/css/home-standard.css";
import "../src/component/css-js/fonts/flaticon/flaticon.css";
import "../src/component/css-js/css/index.css";
import "../src/component/css-js/fonts/fontawesome/fontawesome.min.css";
import "../src/component/css-js/css/product-details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/component/css-js/fonts/icofont/icofont.min.css";
import "../src/component/css-js/vendor/niceselect/nice-select.min.css";
import "../src/component/css-js/vendor/venobox/venobox.min.css";
import "../src/component/css-js/css/user-auth.css";
import "../src/component/css-js/css/orderlist.css";
import "../src/component/css-js/css/wallet.css";
import "../src/component/css-js/css/invoice.css";
import "../src/component/css-js/css/checkout.css";
import CartProvider from "./component/helper/cart/CartProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);


reportWebVitals();
