import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useFetchGifs");

describe("<GifGrid> group", () => {
  const category = "one punch";
  test("should render ok", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("it should show items when the image are loaded with the useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://localhost/some.jpg",
        title: "image title",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
