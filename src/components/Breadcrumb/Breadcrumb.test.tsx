import { mount } from "enzyme";
import React from "react";

import { Breadcrumb } from "./Breadcrumb";

const links = [
  {
    label: "Link 1",
    href: "",
  },
  {
    label: "Link 2",
    href: "",
  },
  {
    label: "Link 3",
    href: "",
  },
];

describe("Breadcrumb", () => {
  it("should render without throwing an error", function () {
    mount(<Breadcrumb links={links}></Breadcrumb>);
  });

  it("should render a nav element", function () {
    const wrapper = mount(<Breadcrumb links={links}></Breadcrumb>);
    expect(wrapper.find("nav")).toHaveLength(1);
  });
});
