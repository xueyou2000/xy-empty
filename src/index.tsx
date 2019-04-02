import React from "react";
import classNames from "classnames";
import { EmptyProps } from "./interface";
import EmptySvg from "../assets/empty.svg";

export function Empty(props: EmptyProps) {
    const { prefixCls = "xy-empty", className, style, image, imageStyle, description = "暂无数据", children } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            <div className={`${prefixCls}-image`} style={imageStyle}>
                <img className={`${prefixCls}-img`} src={image || EmptySvg} alt="empty" />
            </div>
            <p className={`${prefixCls}-description`}>{description}</p>
            {children && <div className={`${prefixCls}-footer`}>{children}</div>}
        </div>
    );
}

export default React.memo(Empty);
