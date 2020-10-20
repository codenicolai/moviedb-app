import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { Flex } from "components/Flex";
import { Navbar } from "components/Navbar";

import { Home } from "pages/admin/Home";

export const Admin = () => {
  return (
    <>
      <Navbar />
      <Flex pt={56} maxWidth="100vw" flex={1}>
        <Flex
          width={1}
          px={{ _: 3, mobile: 5, desktop: 0 }}
          py={10}
          overflow="hidden"
        >
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Flex>
      </Flex>
    </>
  );
};
