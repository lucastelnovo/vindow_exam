import React, { useState } from "react";
import Item from "./Item";
import Popup from "./Popup";
import styled from "styled-components/macro";

const ItemsList = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  const popup = (image) => {
    setShowPopup(true);
    setImageURL(image);
  };

  return (
    <Container>
      {props.items.map((item) => (
        <div key={item.id}>
          <CardContainer>
            <Item
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.image.thumbnail}
              url={item.url}
              popup={() => popup(item.image.url)}
            />
          </CardContainer>
        </div>
      ))}
      <Popup
        showPopup={showPopup}
        imageURL={imageURL}
        closePopup={() => setShowPopup(false)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  flex: 0 0 30%;
  margin: 1rem;
`;

export default ItemsList;
