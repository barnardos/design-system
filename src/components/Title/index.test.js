import React from "react";
import { render } from "react-testing-library";

import Component from "./";
test("Displays the correct title", () => {
  const { getByText } = render(<Component>Test</Component>);
  expect(getByText("Test")).toHaveTextContent("Test");
});
