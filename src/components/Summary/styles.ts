import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: -7rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &:last-child {
            background: var(--green);
            color: #fff;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 1.5rem;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2.25rem;
            font-weight: 500;
            line-height: 3.375rem;
        }
    }
`;