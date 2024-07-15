import { DogStore } from "./DogStore";
import { IRootStore, RootStore } from "./rootStore";

export function makeStore(): IRootStore {
  const rootStore = new RootStore();
  const dogStore = new DogStore(rootStore);

  rootStore.register("DogStore", dogStore);

  return rootStore;
}
