import { RegisterForm } from "../RegisterForm/RegisterForm";
import { useEffect } from "react";
import {
  CloseBtn,
  Modal,
  ModalDescr,
  ModalOverlay,
  ModalTitle,
} from "./ModalRegister.Styled";
import { CgClose } from "react-icons/cg";

export const ModalRegister = ({ openModal }) => {
  // componentDidMount()
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      // componentWillUnmount(
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      openModal();
    }
  };

  const handleCloseClick = () => {
    openModal();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <Modal>
        <CloseBtn onClick={handleCloseClick} type="button">
          <CgClose />
        </CloseBtn>
        <ModalTitle>Registration</ModalTitle>
        <ModalDescr>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </ModalDescr>
        <RegisterForm />
      </Modal>
    </ModalOverlay>
  );
};
