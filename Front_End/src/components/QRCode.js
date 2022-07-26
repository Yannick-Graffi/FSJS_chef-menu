import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
<<<<<<< HEAD
=======
import App from '../App'

>>>>>>> d479806cc79f536ecb1be025880485c12dca2e68
import "./QRCode.css";

function qrCode() {
  return (
    <div className="QRC">
       <QRCode value="54655464889" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<QRCode />, rootElement);

export default qrCode;