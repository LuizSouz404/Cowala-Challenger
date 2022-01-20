import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  padding: 0 2rem;
  margin: .3125rem 0;
  width: auto;
  white-space: nowrap;

  text-transform: uppercase;

  border: 2px solid transparent;
  border-radius: var(--border-radius);
  outline: 0;

  
  @media(max-width: 450px) {
    width: 100%;
  }

  &.primary-button {
    color: var(--text-dark);
    background: var(--primary-color);
    transition: .2s background;

    &:hover {
      background: var(--primary-color-light);
    }
  }

  &.secondary-button {
    color: var(--text-light);
    background: var(--secondary-color);
    transition: .2s background;
    
    &:hover {
      background: var(--secondary-color-light);
    }
  }
`;