import { FormEvent, useState } from 'react';
import { Container, RadioBox, TransactionTypeButton } from './styles'
import { api } from '../../services/api';

import Modal from 'react-modal'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeimg from '../../assets/close.svg'


interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('income')


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            type,
            value,
            category
        };

        api.post('transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeimg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeButton>
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
                </TransactionTypeButton>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button
                    type="submit"
                >
                    Cadastrar
                </button>

            </Container>
        </Modal>
    );
}