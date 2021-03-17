import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

export function TransactionTypeButton() {
    return (
        <Container>
            <button
                type="button"
            >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </button>

            <button
                type="button"
            >
                <img src={outcomeImg} alt="Saida" />
                <span>Entrada</span>
            </button>
        </Container>
    );
}