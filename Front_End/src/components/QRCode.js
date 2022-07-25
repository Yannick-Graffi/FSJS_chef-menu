import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import "./QRCode.css";

function QRCode() {
  return (
    <div className="QRC">
       <QRCode value="54655464889" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<QRCode />, rootElement);

export default QRCode;