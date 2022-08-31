import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Header from "./Header";

describe("<Header />", () => {
  it("should have a logo", async () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("should have a searchbox when isHavingSearchBox is set", async () => {
    const { getByTestId } = render(<Header isHavingSearchBox />);
    const searchBox = getByTestId("search");
    expect(searchBox).toBeInTheDocument();
  });
});
