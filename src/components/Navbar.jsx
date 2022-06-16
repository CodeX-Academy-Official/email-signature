import React from "react";

function Navbar() {
  const style = {
    backgroundColor: "#00ADFF",
  };

  return (
    <>
      <nav className="navbar navbar-dark mb-3" style={style}>
        <div className="container">
          <span className="navbar-brand light">
            CodeX Academy Email Signature
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
