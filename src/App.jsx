import React from "react";

import { AppRouter } from "./components/AppRouter/AppRouter";
import { TokenProvider } from "./context/TokenProvider";

function App() {
  return (
    <TokenProvider>
      <AppRouter />
    </TokenProvider>
  );
}

export default App;
