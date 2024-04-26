import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  max-width: 1312px;
  padding: 0 64px 36px;
  gap: 20px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 148px;
`;

export const SelectPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 128px;
`;

export const SelectLevelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 148px;
`;

export const SelectLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.filterLabelColor};
`;

export const ResetButton = styled.button`
  border-radius: 12px;
  padding: 14px 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
  background-color: ${(props) => props.theme.colors.accentColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;
