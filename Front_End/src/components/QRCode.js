import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import App from '../App'

import "./QRCode.css";

function qrCode() {
  return (
    <div className="QRC">
       <QRCode value="54655464889" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default qrCode;