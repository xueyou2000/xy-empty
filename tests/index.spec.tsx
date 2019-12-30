import React from "react";
import { render } from "@testing-library/react";
import Empty from "../src";
import ZhLocal from "../src//local/zh";

describe("Empty", () => {
    test("render", () => {
        const wrapper = render(<Empty />);
        const p = wrapper.getByText(ZhLocal.EmptyLocal.description);
        expect(p).toBeDefined();
    });

    test("render footer", () => {
        const wrapper = render(
            <Empty>
                <button>重试</button>
            </Empty>,
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
        const wrapper = render(<Empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" />);
        const img = wrapper.container.querySelector(".xy-empty-img") as HTMLImageElement;
        expect(img.src).toBe("https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original");
    });
});
