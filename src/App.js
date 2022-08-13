import React, { useState } from "react";
import Route from "./components/page/Route";
import SpendingAdd from "./components/page/SpendingAdd";
import SpendingList from "./components/page/SpendingList";

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const backToListPage = () => setIsAdd(false)

  if (isAdd) {
    return <SpendingAdd backToListPage={backToListPage} />;
  }
  return (
    <>
      <Route />
    </>
  );
}

export default App;
