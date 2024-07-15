import { makeAutoObservable } from "mobx";
import { IStore, RootStore } from "../rootStore";
import { useStoreContext } from "../RootStoreContext";
import { Dog } from "./types";
import autoBind from "auto-bind";
import axios from "axios";

export type DogStoreState = {
  dogs: Dog[];
  dog?: Dog;
  fetchedDogData: Dog[];
  searchInput?: string;
  fetchedSearchDogData: Dog[];
  searchedDogs: Dog[];
};

export const useDogStore = (): DogStore => {
  return useStoreContext("DogStore");
};

export class DogStore implements IStore {
  public state: DogStoreState;
  public readonly rootStore: RootStore;

  public static getInitialState(): DogStoreState {
    return {
      dogs: [],
      fetchedDogData: [],
      searchInput: undefined,
      fetchedSearchDogData: [],
      searchedDogs: [],
    } as DogStoreState;
  }

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = DogStore.getInitialState();

    makeAutoObservable(this, { rootStore: false });
    autoBind(this);
  }

  public cleanState(): void {
    this.state = DogStore.getInitialState();
  }

  public setDog(dog: Dog) {
    this.state.dog = dog;
  }

  public *getDogs(): Generator {
    yield axios.get("https://freetestapi.com/api/v1/dogs").then((response) => {
      this.state.fetchedDogData = response.data;
    });
    this.state.dogs = this.state.fetchedDogData as Dog[];
    // console.log(JSON.parse(JSON.stringify(this.state.fetchedDogData)));
  }

  public *getDogSearchResult(): Generator {
    if (this.state.searchInput !== undefined && this.state.searchInput !== "") {
      yield axios
        .get(
          `https://freetestapi.com/api/v1/dogs?search=${this.state.searchInput}`,
        )
        .then((response) => {
          this.state.fetchedSearchDogData = response.data;
        });
    }
    this.state.searchedDogs = this.state.fetchedSearchDogData as Dog[];
  }

  public changeSearchInput(input: string) {
    this.state.searchInput = input;
  }

  // public changeName(newName: string){
  //     this.state.name = newName;
  // }
}
