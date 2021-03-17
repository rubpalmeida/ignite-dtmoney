import styled from 'styled-components';
import { darken, transparentize } from 'polished'


export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;

        background: var(--input-background);

        font-weight: 400;
        font-size: 1rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.98)
        }

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type=submit] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        background: var(--green);
        color: #fff;

        border-radius: 0.25rem;
        border: 0;

        font-size: 1rem;
        font-weight: 600;

        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    
`;

export const TransactionTypeButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    margin: 1rem 0;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'
    };

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
`;