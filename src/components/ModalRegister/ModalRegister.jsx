import { RegisterForm } from "../RegisterForm/RegisterForm";
import { useEffect } from "react";

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

  const handleCloseClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      openModal();
    }
  };

  return (
    <div onClick={handleOverlayClick}>
      <div>
        <button onClick={handleCloseClick} type="button">
          &times;
        </button>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <RegisterForm />
      </div>
    </div>
  );
};
