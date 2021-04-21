import React, { useContext, useState } from "react";
import { Store } from "../Store";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as NewsClient from "../api/News";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styled from "styled-components/macro";

const Searchbar = () => {
  const AppState = useContext(Store);
  const { dispatch } = AppState;
  const [serverError, setServerError] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  const doSearch = async ({ query }) => {
    setServerError(false);
    dispatch({ type: "SHOW_SPINNER", payload: true });
    try {
      const response = await NewsClient.getNews(query, 1, 6);
      dispatch({ type: "SET_RESULTS", payload: response.value });
      dispatch({ type: "SET_QUERY", payload: query });
      dispatch({ type: "SET_ACTIVE_PAGE", payload: 1 });
    } catch (err) {
      setServerError(true);
      setServerErrorMessage("server error");
    } finally {
      dispatch({ type: "SHOW_SPINNER", payload: false });
    }
  };

  return (
    <Formik
      initialValues={{ query: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.query) {
          errors.query = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          await doSearch(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Container>
            <Field name="query" component={CustomInputComponent} />
            <Button type="submit" disabled={isSubmitting}>
              Search
            </Button>
          </Container>
          <Error>
            <ErrorMessage name="query" />
            {serverError && <p>{serverErrorMessage}</p>}
          </Error>
        </Form>
      )}
    </Formik>
  );
};

const CustomInputComponent = ({ field, form, ...props }) => (
  <SearchField>
    <FormControl {...field} {...props} />
  </SearchField>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SearchField = styled.div`
  flex: 85% 0;
  margin-right: 1rem;
`;

const Error = styled.div`
  color: red;
`;

export default Searchbar;
