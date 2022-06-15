import React, { useState } from "react";
import EmailSignatureCodeXAcademy from "./EmailSignatureCodeXAcademy";

function SignatureBuilder() {
  const [name, setName] = useState("Byron Sommardahl"); // "Byron Sommardahl"
  const [role, setRole] = useState("Chief Technology Officer"); // "Chief Technology Officer"
  const [phone, setPhone] = useState("(615) 988-4700"); // "(615) 988-4700"

  function selectElementContents(element) {
    var body = document.body,
      range,
      selection;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      selection = window.getSelection();
      selection.removeAllRanges();
      try {
        range.selectNodeContents(element);
        selection.addRange(range);
      } catch (e) {
        range.selectNode(element);
        selection.addRange(range);
      }
      document.execCommand("Copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(element);
      range.select();
      range.execCommand("Copy");
    }
    document.getElementById("copyButton").textContent = "Copied! ✅";
    document.getElementById("copyButton").classList = "btn btn-success";
    setTimeout(() => {
      document.getElementById("copyButton").textContent =
        "Copy to clipboard 📝";
      document.getElementById("copyButton").classList = "btn btn-primary";
    }, 7000);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="h1">Enter your info.</h1>
          </div>
          <div className="col">
            <h1 className="h1">Your email signature.</h1>
            <EmailSignatureCodeXAcademy />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignatureBuilder;
