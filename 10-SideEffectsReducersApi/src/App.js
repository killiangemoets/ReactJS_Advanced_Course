import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  // To have access the context and its content we need to listen and we can listen in 2 ways:
  // - by using auth-context consumer <AuthContext.Consumer>
  // - by using a react hook : useContext

  return (
    <React.Fragment>
      {/* see index.js */}
      {/* <AuthContext.Provider
        value={{
          isLoggedIn: false,
          onLogout: logoutHandler,
          // We can also pass functions
        }}
      > */}
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
