import { render, screen } from "@testing-library/react";
import SignatureBuilder from "../components/SignatureBuilder";

test("renders enter your info", () => {
  render(<SignatureBuilder />);
  const linkElement = screen.getByText(/Enter your info\./i);
  expect(linkElement).toBeInTheDocument();
});
