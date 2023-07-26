import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${props =>
    props.active
      ? `
    border-color: #ccc;
  `
      : `
    border-color: transparent;
  `}
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = image => {
    setActiveImage(image);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <BigImageWrapper onClick={openModal}>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => handleImageClick(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>

      {modalVisible && (
        <ModalContainer onClick={closeModal}>
          <ModalContent>
            <ModalImage src={activeImage} alt="" />
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
