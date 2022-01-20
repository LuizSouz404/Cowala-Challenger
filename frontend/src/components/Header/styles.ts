import styled from 'styled-components';

export const Container = styled.header`
  background: var(--secondary-color);
  box-shadow: var(--box-shadow);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 343px;

    width: 100%;
  }
`;