import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  max-width: 1312px;
  padding: 0 24px 36px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
`;

export const SelectLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.filterLabelColor};
`;
