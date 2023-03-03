import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("Footer component should render the correct text", () => {
  const { getByText } = render(<Footer />);
  const textElement = getByText(
    /© 2023 Saudi Basic Industries Corporation \(SABIC\), All Rights Reserved./i
  );
  expect(textElement).toBeInTheDocument();
});
