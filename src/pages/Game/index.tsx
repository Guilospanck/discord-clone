import React from "react";

/** Views */
import { GameView } from './views';

/** ViewModels */
import { useGameViewModel } from "./viewModels/gameViewModel";

/** Components */

export const Game = () => {
  const viewModel = useGameViewModel();

  return (
    <GameView viewModel={viewModel} />
  );
};