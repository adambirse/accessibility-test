import { mount } from "enzyme";
import React from "react";

import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("should render without throwing an error", function () {
    mount(
      <Breadcrumb
        links={[
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
        ]}
      ></Breadcrumb>
    );
  });
});
