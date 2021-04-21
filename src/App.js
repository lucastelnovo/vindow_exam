import React, { useContext } from "react";
import { Store } from "./Store";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ItemsList from "./components/ItemsList";
import PaginationBasic from "./components/PaginationBasic";
import styled from "styled-components/macro";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const AppState = useContext(Store);
  const { state } = AppState;
  let data = state.results;
  let showSpinner = state.showSpinner;

  return (
    <Container>
      <h1>News search</h1>
      <Searchbar />
      {showSpinner && (
        <Center>
          <Spinner animation="border" />
        </Center>
      )}
      {data.length > 0 && <ItemsList items={data} />}
      {data.length > 0 && <PaginationBasic />}
      {data.length === 0 && !showSpinner && (
        <Center>
          <p>No results</p>
        </Center>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem;
`;

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default App;
