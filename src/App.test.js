import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, { useRef } from "react";
import App from "./App";

configure({ adapter: new Adapter() });

describe("rendering ColorPalette", () => {
  it("should render my canvas with colors", () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should find the canvas element and match the given width and height", () => {
    const component = shallow(<App />);
    expect(component.find("canvas").props().width).toEqual(256);
    expect(component.find("canvas").props().height).toEqual(128);
  });
});
