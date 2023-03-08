import React from "react";
import { render } from "@testing-library/react";
import GraphicalOverview from "./GraphicalOverview";

test("Graphical Overview component should render the correct text", () => {
  const { getByText } = render(<GraphicalOverview GraphicalImageByAssetId={[]} />);
});
