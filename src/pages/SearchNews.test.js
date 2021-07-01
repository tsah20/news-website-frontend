import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount, createShallow } from "@material-ui/core/test-utils";

import SearchNews from "./SearchNews";
import SearchBar from "../components/SearchBar";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<SearchNews />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("Search Component in intial startup", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("render without crashing", () => {});

  test("render non empty component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
