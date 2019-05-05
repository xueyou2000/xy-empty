import React from "react";
import Empty from "../src";

export default function() {
    return (
        <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
                height: 200
            }}
            description={
                <span>
                    Customize <a href="#API">Description</a>
                </span>
            }
        >
            <button>Create Now</button>
        </Empty>
    );
}
