import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("<GifGridItem> group", () => {
  test("should render ok", () => {
    const title = "A title";
    const url = "https://localhost/some.jpg";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
