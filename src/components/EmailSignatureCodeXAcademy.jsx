import React from "react";

const EmailSignatureCodeXAcademy = ({ fullName, role, phone }) => {
  const CODEX_BACKGROUND_COLOR = "#01ADFE";
  // const CODEX_BACKGROUND_COLOR_2 = "#363045";
  // const CODEX_BACKGROUND_COLOR_3 = "#F7BC07";
  // const CODEX_BACKGROUND_COLOR_4 = "#B6C6C8";

  const tableStyle = {
    display: "table",
    borderCollapse: "separate",
    boxSizing: "border-box",
    textIndent: "initial",
    borderSpacing: "2px",
    borderColor: "grey",
  };

  const anchorIconStyle = {
    marginRight: "10px",
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
              width="120"
              src="https://storage.googleapis.com/msgsndr/tQf1jMr6eaubhf5HqxHn/media/61f55bf5685cc3254f37357d.png"
              alt="codex academy graduate hat"
            />
          </td>
          <td
            width="300"
            align="left"
            style={{
              paddingLeft: "15px",
              borderLeft: "2px solid " + CODEX_BACKGROUND_COLOR,
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
                    {role}, CodeX Academy
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
                    <span style={{ color: CODEX_BACKGROUND_COLOR }}>|</span>{" "}
                    <a
                      href="http://codex.academy/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#4F4F4F",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      codex.academy
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
                    <em>
                      Learn to Code. <b>Save the World.</b>
                    </em>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      paddingTop: "6px",
                    }}
                  >
                    <a
                      href="https://www.facebook.com/codexacademyonline"
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="facebook-f"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/tQf1jMr6eaubhf5HqxHn/media/62ab9c995739f771b84e89d4.png"
                        }
                      />
                    </a>
                    <a
                      href="https://twitter.com/Academycodex"
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="twitter"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/tQf1jMr6eaubhf5HqxHn/media/62ab9c99b282222e1de9304f.png"
                        }
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/codexacademyonline/"
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="instagram"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/tQf1jMr6eaubhf5HqxHn/media/62ab9c995739f7b1284e89d5.png"
                        }
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/codexdotacademy/"
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="linked-in"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/tQf1jMr6eaubhf5HqxHn/media/62ab9c99b28222e854e9304e.png"
                        }
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCUKP1GrIaI-dcuV1IlK7x8Q"
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="youtube"
                        width="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/tQf1jMr6eaubhf5HqxHn/media/62ab9c9a5739f75d1b4e89d6.png"
                        }
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
