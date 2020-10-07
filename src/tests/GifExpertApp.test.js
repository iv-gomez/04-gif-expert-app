import React from "react";
const { shallow } = require("enzyme");
const { GifExpertApp } = require("../GifExpertApp");

describe("<GifExpertApp />", () => {
  test("should render ok", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
