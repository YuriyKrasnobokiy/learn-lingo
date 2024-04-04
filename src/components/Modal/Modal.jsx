// import { RegisterForm } from "../RegisterForm/RegisterForm";
import { useEffect } from "react";
import { CloseBtn, ModalOverlay, ModalStyled } from "./Modal.Styled";
import { CgClose } from "react-icons/cg";

export const Modal = ({ openModal, children }) => {
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
      <ModalStyled>
        <CloseBtn onClick={handleCloseClick} type="button">
          <CgClose />
        </CloseBtn>
        {children}
        {/* <RegisterForm /> */}
      </ModalStyled>
    </ModalOverlay>
  );
};
