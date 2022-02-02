import { mount } from "enzyme";
import React from "react";

import { Breadcrumb } from "./Breadcrumb";

const links = [
  {
    label: "Link 1",
    href: "href 1",
  },
  {
    label: "Link 2",
    href: "href 2",
  },
  {
    label: "Link 3",
    href: "href 3",
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

  it("should render a nav element with aria-label", function () {
    const wrapper = mount(<Breadcrumb links={links}></Breadcrumb>);
    expect(wrapper.find("nav").props()["aria-label"]).toBe("Breadcrumb");
  });

  it("should render all anchor elements.", function () {
    const wrapper = mount(<Breadcrumb links={links}></Breadcrumb>);
    expect(wrapper.find("a")).toHaveLength(links.length);
  });
  it("should render anchor element content.", function () {
    const wrapper = mount(<Breadcrumb links={links}></Breadcrumb>);
    expect(wrapper.find("a").first().text()).toBe("Link 1");
    expect(wrapper.find("a").first().props()["href"]).toBe("href 1");
    expect(wrapper.find("a").first().props()["aria-current"]).toBeUndefined();
  });
  it("should render last element content.", function () {
    const wrapper = mount(<Breadcrumb links={links}></Breadcrumb>);
    expect(wrapper.find("a").last().text()).toBe("Link 3");
    expect(wrapper.find("a").last().props()["href"]).toBe("href 3");
    expect(wrapper.find("a").last().props()["aria-current"]).toBe("page");
  });
});
