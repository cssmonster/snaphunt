import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SearchBox from "./SearchBox";

describe("<SearchBox />", () => {
  it("should have a input", async () => {
    const { getByTestId } = render(<SearchBox />);
    const input = getByTestId("input");
    expect(input).toBeInTheDocument();
  });

  it("should show clear icon when input something", async () => {
    const { getByTestId } = render(<SearchBox />);
    const input = getByTestId("input") as any;
    fireEvent.change(input, {
      target: { value: "OPTION1" },
    });
    const clearIcon = getByTestId("clear") as any;
    expect(clearIcon).toBeInTheDocument();
  });

  it("should hide clear icon when input is empty", async () => {
    const { getByTestId } = render(<SearchBox />);
    const input = getByTestId("input") as any;
    fireEvent.change(input, {
      target: { value: "OPTION1" },
    });
    const clearIcon = getByTestId("clear") as any;
    fireEvent.change(input, {
      target: { value: "" },
    });
    expect(clearIcon).not.toBeInTheDocument();
  });

  it("should clear all input value when clear icon is clicked", async () => {
    const { getByTestId } = render(<SearchBox />);
    const input = getByTestId("input") as any;
    fireEvent.change(input, {
      target: { value: "OPTION1" },
    });
    const clearIcon = getByTestId("clear") as any;
    fireEvent.click(clearIcon);
    expect(input.value).toBe("");
    expect(clearIcon).not.toBeInTheDocument();
  });
});
