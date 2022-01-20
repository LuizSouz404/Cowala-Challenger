import styled from "styled-components";

interface InputProps {
  isFilled: boolean;
}

export const Container = styled.label<InputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    padding: .5rem .75rem;
    border-radius: var(--border-radius);
    border: ${({ isFilled }) => isFilled ? `2px solid var(--primary-color)` : '2px solid transparent'};
    color: ${({ isFilled }) => isFilled ? `var(--primary-color-dark)` : 'var(--text-dark)'};
    margin: .3125rem 0;
    background-color: var(--background);

    input {
      margin: 0rem .5rem;
      outline: 0;
      border: 0;
      background: transparent;
      width: 100%;

      -webkit-box-shadow: 0 0 0 30px white inset;
    }
  }
`;