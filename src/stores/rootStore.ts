import autoBind from "auto-bind";

export type StoreKey = "DogStore";

export interface IRootStore {
  getStore<T extends IStore>(key: StoreKey): T;
}

export interface IStore {
  readonly rootStore: RootStore;
}

export class RootStore implements IRootStore {
  private readonly _stores: { [key: string]: IStore };

  constructor() {
    this._stores = {};
    autoBind(this);
  }

  public register<T extends IStore>(key: StoreKey, value: T): void {
    this._stores[key] = value;
  }

  public getStore<T extends IStore>(key: StoreKey): T {
    return this._stores[key] as T;
  }
}
