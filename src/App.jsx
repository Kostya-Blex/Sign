import React, { useState, useEffect } from "react";

import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {
  //   const petya = () => setIsAuth(false);
  // });

  return <AppRouter isAuth={isAuth} />;
}

export default App;
