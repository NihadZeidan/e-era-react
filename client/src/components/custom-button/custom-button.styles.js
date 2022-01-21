import styled, { css } from "styled-components";

const getDifferentButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedStyles : regularStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    font-size: 12px;
    letter-spacing: unset;
    line-height: unset;
    padding: 0 20px;
    text-align: center;
    justify-content: center;
  }

  ${getDifferentButtonStyles}
`;

const googleSignInStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;

const regularStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;
