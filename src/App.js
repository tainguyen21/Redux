import productApi from "api/productApi";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

const Photo = React.lazy(() => import("./features/Photo/Photo"));

function App() {
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };

        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
