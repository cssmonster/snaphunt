import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Footer from "./Footer";

describe("<Footer />", () => {
  it("should have a description", async () => {
    const { getByTestId } = render(<Footer />);
    const desc = getByTestId("desc");
    expect(desc).toBeInTheDocument();
  });
  it("should have a copyright", async () => {
    const { getByTestId } = render(<Footer />);
    const copyright = getByTestId("copyright");
    expect(copyright).toBeInTheDocument();
  });
  it("should have facebook icon", async () => {
    const { getByTestId } = render(<Footer />);
    const fb = getByTestId("fb");
    expect(fb).toBeInTheDocument();
  });
  it("should have linkin icon", async () => {
    const { getByTestId } = render(<Footer />);
    const linkin = getByTestId("linkin");
    expect(linkin).toBeInTheDocument();
  });
  it("should have twitter icon", async () => {
    const { getByTestId } = render(<Footer />);
    const twitter = getByTestId("twitter");
    expect(twitter).toBeInTheDocument();
  });
  it("should have instagram icon", async () => {
    const { getByTestId } = render(<Footer />);
    const instagram = getByTestId("instagram");
    expect(instagram).toBeInTheDocument();
  });
});
