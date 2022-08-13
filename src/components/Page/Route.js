import React from "react";
import { useSelector } from "react-redux";
import {
  SPENDING_ADD,
  SPENDING_LIST,
  SPENDING_UPDATE,
} from "../../store/Screen/constants";
import SpendingAdd from "./SpendingAdd";
import SpendingList from "./SpendingList";

const screens = {
  [SPENDING_LIST]: SpendingList,
  [SPENDING_ADD]: SpendingAdd,
  [SPENDING_UPDATE]: SpendingAdd,
};

const Route = () => {
    const screen = useSelector((state) => state.screen);
    console.log({ screen })

  const Component = screens[screen];
  return <Component />;
};

export default Route;
