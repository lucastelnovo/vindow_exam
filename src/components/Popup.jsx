import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components/macro";

const Popup = (props) => {
  const handleClose = () => {
    props.closePopup();
  };

  return (
    <Container>
      <Modal show={props.showPopup} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image
            src={props.imageURL}
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export default Popup;
