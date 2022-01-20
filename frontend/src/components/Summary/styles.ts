import styled from "styled-components";

export const Container = styled.main`
    margin: 4.3125rem auto;
    max-width: 1120px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    padding: 2rem;
    margin: 0 2rem;
    background: var(--shape);
    box-shadow: var(--box-shadow);
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    form {
        max-width: 540px;
        width: 100%;
    }
`;

export const DoubleElementRow = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2rem;
    margin: 1.25rem 0 0;

    @media(max-width: 450px) {
        flex-direction: column;
        gap: 1.25rem;
    }
`

export const ButtonRow = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2rem;
    margin: 1.25rem 0 0;
`