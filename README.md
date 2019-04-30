| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-empty.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-empty.svg?style=flat-square)

[![xy-empty](https://nodei.co/npm/xy-empty.png)](https://npmjs.org/package/xy-empty)

# xy-empty

暂时为空的状态， 样式组件。

## 安装

```bash
# yarn
yarn add xy-empty classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Empty from "xy-empty";
ReactDOM.render(<Empty />, container);
```

## 何时使用

-   当目前没有数据时，用于显式的用户提示。
-   初始化场景时的引导创建流程。

## API

| 属性        | 说明           | 类型                | 默认值     |
| ----------- | -------------- | ------------------- | ---------- |
| image       | 自定义图片地址 | string              | 无         |
| imageStyle  | 图片样式       | React.CSSProperties | 无         |
| description | 描述内容       | React.ReactNode     | "暂无数据" |
| children    | 底部操作内容   | React.ReactNode     | 无         |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-empty is released under the MIT license.
