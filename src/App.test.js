import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, { useRef } from "react";
import 'jest-canvas-mock';
import App from "./App";

configure({ adapter: new Adapter() });

describe("rendering ColorPalette", () => {
  it("should find the canvas element and match the given width and height", () => {
    const component = shallow(<App />);
    expect(component.find("canvas").props().width).toEqual(256);
    expect(component.find("canvas").props().height).toEqual(128);
  });

  it("should catch the color elements to be unique and 32768 in count", () => {
    const wrapper = mount(<App />);
    const arr = [...new Set(wrapper.find("#unique-colors").props().value)];
    expect(arr.length).toEqual(32768);
  });
});
