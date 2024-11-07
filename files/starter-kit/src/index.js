import React, { Fragment, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import Loader from "./component/common/loader/loader";

const Root = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <MainRoutes />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
