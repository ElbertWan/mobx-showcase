import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { Dog } from "../../stores/DogStore/types";
import styled from "styled-components";

const FlexColumns = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`;

const Title = styled.span`
  color: pink;
  font-size: 15px;
  margin-right: 10px;
`;
const SubTitle = styled.span`
  color: white;
  font-size: 15px;
`;
const DogImage = styled.img`
  width: 100px;
  height: 100px;
`;

type DogInfoProps = {
  dogs: Dog[];
};

const DogInfo: FunctionComponent<DogInfoProps> = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog: Dog) => {
        return (
          <div>
            <FlexColumns>
              <Title>id: </Title>
              <SubTitle>{dog.id}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>name: </Title>
              <SubTitle>{dog.name}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>breed_group: </Title>
              <SubTitle>{dog.breed_group}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>size: </Title>
              <SubTitle>{dog.size}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>lifespan: </Title>
              <SubTitle>{dog.lifespan}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>origin: </Title>
              <SubTitle>{dog.origin}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>temperament: </Title>
              <SubTitle>{dog.temperament}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>colors: </Title>
              <SubTitle>{dog.colors}</SubTitle>{" "}
            </FlexColumns>
            <FlexColumns>
              <Title>description: </Title>
              <SubTitle>{dog.description}</SubTitle>
            </FlexColumns>
            <DogImage src={dog.image} alt={""} />
          </div>
        );
      })}
    </div>
  );
};

export default observer(DogInfo);
