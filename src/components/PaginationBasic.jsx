import React, { useContext, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components/macro";
import * as NewsClient from "../api/News";
import { Store } from "../Store";

const PaginationBasic = () => {
  const AppState = useContext(Store);
  const { state, dispatch } = AppState;

  const loadPage = async (pageNumber) => {
    dispatch({ type: "SHOW_SPINNER", payload: true });
    try {
      const response = await NewsClient.getNews(state.query, pageNumber, 6);
      dispatch({ type: "SET_RESULTS", payload: response.value });
      dispatch({ type: "SET_ACTIVE_PAGE", payload: pageNumber });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({ type: "SHOW_SPINNER", payload: false });
    }
  };

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === state.activePage}
        onClick={() => loadPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <Pagination size="lg">{items}</Pagination>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default PaginationBasic;
