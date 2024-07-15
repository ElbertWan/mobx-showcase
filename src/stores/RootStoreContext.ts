import { createContext, useContext } from "react";
import { IRootStore, IStore, StoreKey } from "./rootStore";

export const RootStoreContext = createContext<IRootStore>(undefined!);

export const useRootContext = (): IRootStore => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error("RootStoreContext.Provider not set");
  }
  return context;
};

export function useStoreContext<T extends IStore>(key: StoreKey): T {
  return useRootContext().getStore(key);
}
