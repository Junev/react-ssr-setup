import loadable from "@loadable/component";
import { delay } from "share/utils/delay";
import { PreLoadRouteConfig } from "@/types/router";

// import P1 from "components/EX/Page1";
// import P2 from "components/EX/Page2";

// 配置静态路由
let routes: PreLoadRouteConfig[];

routes = [
  {
    path: "/fr",
    exact: false,
    component: loadable(() => import("components/EX/Page1")),
    preLoadPromises: [(props) => delay(1000, () => props)],
    endDispatchActions: [
      (store, data) => {
        console.log(store, data);
      },
    ],
  },
  {
    path: "/pr",
    exact: false,
    component: loadable(() => import("components/EX/Page2")),
  },
];

export { routes };
