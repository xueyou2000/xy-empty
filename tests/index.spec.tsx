import React from "react";
import { render } from "react-testing-library";
import Empty from "../src";

describe("Empty", () => {
    test("render", () => {
        const wrapper = render(<Empty />);
        const p = wrapper.getByText("暂无数据");
        expect(p).toBeDefined();
    });
});
