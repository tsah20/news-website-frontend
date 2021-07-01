import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount, createShallow } from "@material-ui/core/test-utils";

import BrandName from "./BrandName";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const brandName = "TNY-TECH-TEST";

const setup = () => shallow(<BrandName brandName="TNY-TECH-TEST" />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("render without crashing", () => {
  const wrapper = setup();
});

test("render non empty component without crashing", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test("checks if header name is correct", () => {
  const wrapper = setup();
  const wrapperprops = wrapper.props().children;
  const textElement = findByTestAttr(wrapper, "component-brandname");
  const textElementText = textElement.text();
  expect(textElementText).toEqual(wrapperprops);
});
