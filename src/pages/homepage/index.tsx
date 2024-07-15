import { observer } from "mobx-react-lite";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { useDogStore } from "../../stores/DogStore";
import { Dog } from "../../stores/DogStore/types";
import { useDebouncedCallback } from "use-debounce";
import DogInfo from "../../containers/dogInfo";

const PageFill = styled.div`
  padding: 50px 50px;
  height: auto;
  left: 0;
  top: 0;
  @media (max-width: 1024px) {
    padding: 50px 20px;
  }
`;

const PageWrapper = styled.div`
  padding: 20px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.4em;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Homepage: FunctionComponent = () => {
  const dogStore = useDogStore();
  const debouncedSendRequest = useDebouncedCallback(() => {
    dogStore.getDogSearchResult();
  }, 2000);

  return (
    <PageFill>
      <PageWrapper>
        <div>
          <button
            onClick={() => {
              dogStore.getDogs();
            }}
          >
            Press to get dogs
          </button>
          <DogInfo dogs={dogStore.state.dogs} />
        </div>
        <div>
          <input
            value={dogStore.state.searchInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dogStore.changeSearchInput(e.target.value);
              debouncedSendRequest();
            }}
          />
          <DogInfo dogs={dogStore.state.searchedDogs} />
        </div>
      </PageWrapper>
    </PageFill>
  );
};

export default observer(Homepage);
