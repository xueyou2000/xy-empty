export interface EmptyProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 自定义图片内容, 为 string 时表示自定义图片地址
     */
    image?: string;
    /**
     * 图片样式
     */
    imageStyle?: React.CSSProperties;
    /**
     * 描述内容
     */
    description?: React.ReactNode;
    /**
     * 底部操作内容
     */
    children?: React.ReactNode;
}
