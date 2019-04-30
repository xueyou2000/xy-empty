import React from "react";
import { render } from "react-testing-library";
import Empty from "../src";
import { EmptyLocal } from "../src/Locale";

describe("Empty", () => {
    test("render", () => {
        const wrapper = render(<Empty />);
        const p = wrapper.getByText(EmptyLocal.description);
        expect(p).toBeDefined();
    });

    test("render footer", () => {
        const wrapper = render(
            <Empty>
                <button>重试</button>
            </Empty>
        );
        const btn = wrapper.getByText("重试");
        expect(btn.parentElement.classList.contains("xy-empty-footer")).toBeTruthy();
    });

    test("customize description", () => {
        const wrapper = render(<Empty description="没有数据" />);
        const p = wrapper.getByText("没有数据");
        expect(p).toBeDefined();
    });

    test("customize image", () => {
        const wrapper = render(<Empty image="https://xx.png" />);
        const img = wrapper.container.querySelector(".xy-empty-img") as HTMLImageElement;
        expect(img.src).toBe("https://xx.png");
    });
});
