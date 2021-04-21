import Card from "react-bootstrap/Card";
import styled from "styled-components/macro";

const Item = (props) => {
  let descriptionShort = props.description.substring(0, 20) + "...";

  return (
    <Card style={{ width: "20rem", height: "22rem" }}>
      <Card.Img
        onClick={() => props.popup()}
        variant="top"
        src={props.thumbnail}
        style={{ height: "10rem" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{descriptionShort}</Card.Text>
      </Card.Body>
      <Link onClick={() => window.open(props.url, "_blank")}>
        <p>Read more...</p>
      </Link>
    </Card>
  );
};

const Link = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  margin-right: 1rem;
  color: blue;
  cursor: pointer;
`;

export default Item;
