import styled from 'styled-components';

import { darken } from 'polished'

export const Container = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;


    button {
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: transparent;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')}
        }
        
        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 0.5rem;

            font-size: 1rem;
            color: var(--text-title);
        }
    }
`;