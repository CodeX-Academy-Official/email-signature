import React from "react";

const EmailSignatureCodeXAcademy = ({ fullName, role, phone }) => {
  // const style = {
  //   backgroundColor: "#ffffff",
  // };

  const tableStyle = {
    display: "table",
    borderCollapse: "separate",
    boxSizing: "border-box",
    textIndent: "initial",
    borderSpacing: "2px",
    borderColor: "grey",
  };

  return (
    <table
      style={tableStyle}
      id="tableId"
      border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tbody>
        <tr>
          <td style={{ padding: "15px" }}>
            <img
              width="70"
              src="http://acklenavenue.com/img/pixelheart.png"
              alt="acklen avenue pixel heart"
            />
          </td>
          <td
            width="300"
            align="left"
            style={{
              paddingLeft: "15px",
              borderLeft: "2px solid #72C02C",
              textAlign: "left",
            }}
          >
            <table
              border="0"
              align="left"
              cellPadding="0"
              cellSpacing="0"
              width="250"
              style={{ textAlign: "left" }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {fullName}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      paddingTop: "3px",
                    }}
                  >
                    {role}, Acklen Avenue
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      paddingTop: "3px",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#4F4F4F",
                        fontSize: "12px",
                      }}
                      href={"tel:" + { phone }}
                    >
                      {phone}
                    </a>{" "}
                    <span style={{ color: "#72C02C" }}>|</span>{" "}
                    <a
                      href="http://acklenavenue.com/"
                      style={{
                        textDecoration: "none",
                        color: "#4F4F4F",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      acklenavenue.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      paddingTop: "3px",
                      color: "#999999",
                    }}
                  >
                    <em>Stress-Free Wizardry</em>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", paddingTop: "6px" }}>
                    <a href="https://www.linkedin.com/company/acklen-avenue">
                      <img
                        width="18"
                        src="http://acklenavenue.com/img/linked-in-icon.png"
                        alt="linkedin"
                      />
                    </a>{" "}
                    <a href="https://twitter.com/acklenavenue">
                      <img
                        width="18"
                        alt="twitter"
                        src="http://acklenavenue.com/img/twitter-icon.png"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmailSignatureCodeXAcademy;
