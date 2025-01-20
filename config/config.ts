// https://umijs.org/config/
import { defineConfig } from "@umijs/max";
import { join } from "path";
import defaultSettings from "./defaultSettings";
import proxy from "./proxy";
import routes from "./routes";

const { REACT_APP_ENV = "dev" } = process.env;

const PUBLIC_PATH: string = "/";

export default defineConfig({
  hash: true,

  publicPath: PUBLIC_PATH,

  routes,

  theme: {
    "root-entry-name": "variable",
    "font-family": `'Oswald', sans-serif`,
  },

  ignoreMomentLocale: true,

  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],

  fastRefresh: true,

  model: {},

  initialState: {},

  title: "Ant Design Pro",
  layout: {
    locale: true,
    ...defaultSettings,
  },

  moment2dayjs: {
    preset: "antd",
    plugins: ["duration"],
  },

  locale: {
    default: "zh-CN",
    antd: true,
    baseNavigator: true,
  },

  antd: {},

  request: {},

  access: {},

  headScripts: [{ src: join(PUBLIC_PATH, "scripts/loading.js"), async: true }],
  presets: ["umi-presets-pro"],

  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: join(__dirname, "oneapi.json"),
      mock: false,
    },
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath:
        "https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json",
      projectName: "swagger",
    },
  ],
  mfsu: {
    strategy: "normal",
  },
  esbuildMinifyIIFE: true,
  requestRecord: {},
});
