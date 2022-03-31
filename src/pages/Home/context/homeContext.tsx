import React, { createContext } from "react";

type HomeContextProps = {

}

export const HomeContext = createContext<HomeContextProps | null>(null)

export const HomeContextProvider = ({ children }) => {

  const defaultContext: HomeContextProps = {

  }

  return <HomeContext.Provider value={defaultContext}>{children}</HomeContext.Provider>
}