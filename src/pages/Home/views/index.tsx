import React from "react";
import { IuseHomeViewModel } from "../viewModels/homeViewModel";

import { Sidebar } from "../../../components/sidebar";

export const HomeView = ({ viewModel: IuseHomeViewModel }) => {
  return (
    <>
      <Sidebar />
      <h1>Hello</h1>
    </>
  );
};