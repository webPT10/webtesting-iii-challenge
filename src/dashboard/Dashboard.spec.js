// Test away
import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";

it("renders correctly", () => {
  const { getByTestId } = render(<Dashboard />);
  const element = getByTestId("displayComponent");
});
