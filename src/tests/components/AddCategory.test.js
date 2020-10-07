import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("<AddCategory> group", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("it should rendered ok", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("the input should changes", () => {
    const input = wrapper.find("input");
    const value = "Hello react";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should not submit for empty values", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clear the input", () => {
    const value = "Hello react";
    // 1. simulate the input change
    wrapper.find("input").simulate("change", { target: { value } });
    // 2. simulate the submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // 3. setCategories must be called
    expect(setCategories).toHaveBeenCalled();
    // called 1 time
    expect(setCategories).toHaveBeenCalledTimes(1);
    // called with a function inside of it
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. the input value must be empty => ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
