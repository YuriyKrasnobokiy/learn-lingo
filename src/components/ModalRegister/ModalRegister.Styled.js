import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ///OR///
  /* width: 100vw;
  height: 100vh; */
  background-color: ${(props) => props.theme.colors.ModalBgColor};
  &:hover {
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  /* width: 100%; */
  max-width: 438px;
  /* min-height: 450px; */

  background: white;
  border-radius: 10px;
  cursor: auto;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  background-color: transparent;
  transition: color 0.3s linear;
  stroke: green;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: start;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.ModalTitleColor};
`;

export const ModalDescr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${(props) => props.theme.colors.ModalDescrColor};
  margin-bottom: 40px;
`;
