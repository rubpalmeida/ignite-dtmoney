import { Container, RadioBox } from "./styles";
import { useState } from "react";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

export function TransactionTypeButton() {
    const [type, setType] = useState('income')

    return (
        <Container>
            <RadioBox
                type="button"
                onClick={() => { setType('income') }}
                isActive={type === 'income'}
                activeColor="green"
            >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
                type="button"
                onClick={() => { setType('outcome') }}
                isActive={type === 'outcome'}
                activeColor="red"
            >
                <img src={outcomeImg} alt="Saida" />
                <span>Entrada</span>
            </RadioBox>
        </Container>
    );
}