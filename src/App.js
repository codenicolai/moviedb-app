import React from "react";

import { Admin } from "pages/admin";
import { Login } from "pages/auth/Login";

import { getUser } from "providers/auth";

function App() {
  const login = getUser();

  if (login?.username) {
    return <Admin />;
  }

  return <Login />;
}

export default App;
