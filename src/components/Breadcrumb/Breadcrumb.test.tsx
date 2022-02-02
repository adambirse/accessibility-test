import { mount } from "enzyme";
import React from "react";

import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("should render without throwing an error", function () {
    mount(<Breadcrumb />);
  });
});
