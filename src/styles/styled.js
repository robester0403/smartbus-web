import { TextField } from "@mui/material";
import styled, { keyframes } from "styled-components";

export const TempPhoneContainer = styled.section`
  max-width: 480px;
  margin: 0 auto;
`;

export const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const rockingBusAnimation = keyframes`
  0%, 100% { transform: rotate(-.15deg); }
  15% { transform: rotate(.20deg); }
  20% {transform:scale(.9975);}
  25% { transform: rotate(-.20deg); }
  90% { transform: rotate(.15deg); }
  80% {transform:scale(.9975);}s
  `;

export const Logo = styled.img`
  width: 100%;
  animation-name: ${rockingBusAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const StyledTextField = styled(TextField)({
  marginBottom: "32px",
});
