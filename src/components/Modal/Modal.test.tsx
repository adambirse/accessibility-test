import { mount } from "enzyme";
import React from "react";

import { Modal } from "./Modal";

describe("Modal", () => {
  const mockToggle = () => {
    return true;
  };

  it("should render without throwing an error", function () {
    mount(<Modal visible toggle={mockToggle} />);
  });
  it("should have the alert role", function () {
    const wrapper = mount(<Modal visible toggle={mockToggle} />);
    expect(wrapper.find("#modal").props()["role"]).toBe("alert");
  });
});
