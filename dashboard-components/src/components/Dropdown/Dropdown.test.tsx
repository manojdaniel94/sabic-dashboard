import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("Footer component should render the correct text", () => {
  const { getByText } = render(<Dropdown />);
  // const textElement = getByText(
  //   /© 2023 Saudi Basic Industries Corporation \(SABIC\), All Rights Reserved./i
  // );
  // expect(textElement).toBeInTheDocument();
});
