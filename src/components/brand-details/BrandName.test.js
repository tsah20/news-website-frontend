import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount, createShallow } from "@material-ui/core/test-utils";

import BrandName from "./BrandName";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<BrandName />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("render without crashing", () => {
  const wrapper = setup();
});

test("render non empty component without crashing", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test("check if header name is correct", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-brandname").text();

  expect(appComponent).toBe("TNY-TECH-TEST");
});
