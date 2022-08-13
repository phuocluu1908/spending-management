import React, { useState } from "react";
import LoginPage from "./components/page/LoginPage";
import SpendingAdd from "./components/page/SpendingAdd";
import SpendingList from "./components/page/SpendingList";

function App() {
  const [isAdd, setIsAdd] = useState(false);
  console.log('just for test')
  const backToListPage = () => setIsAdd(false)

  if (isAdd) {
    return <SpendingAdd backToListPage={backToListPage} />;
  }
  return (
    <>
      <SpendingList />
      <button onClick={() => setIsAdd(true)}>Add go add screen</button>
    </>
  );
}

export default App;
