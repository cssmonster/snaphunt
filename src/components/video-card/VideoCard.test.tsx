import React from "react";
import { render, fireEvent } from "@testing-library/react";

import VideoCard from "./VideoCard";

describe("<VideoCard />", () => {
  it("should have a banner", async () => {
    const { getByTestId } = render(
      <VideoCard
        title="Deadpool"
        desc="In my opinion there is an issue around this line. It should get the modules of the original config as well."
        bannerUrl="https://tieudung.kinhtedothi.vn/upload_images/images/2018/05/19/Deadpool-2.jpg"
      />
    );
    const banner = getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });
  it("should have a title", async () => {
    const { getByTestId } = render(
      <VideoCard
        title="Deadpool"
        desc="In my opinion there is an issue around this line. It should get the modules of the original config as well."
        bannerUrl="https://tieudung.kinhtedothi.vn/upload_images/images/2018/05/19/Deadpool-2.jpg"
      />
    );
    const title = getByTestId("title");
    expect(title).toBeInTheDocument();
  });
  it("should have a description", async () => {
    const { getByTestId } = render(
      <VideoCard
        title="Deadpool"
        desc="In my opinion there is an issue around this line. It should get the modules of the original config as well."
        bannerUrl="https://tieudung.kinhtedothi.vn/upload_images/images/2018/05/19/Deadpool-2.jpg"
      />
    );
    const desc = getByTestId("desc");
    expect(desc).toBeInTheDocument();
  });
});
