import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from "./style";
import {
  ArrowCircleUp,
  X,
  ArrowCircleDown,
} from 'phosphor-react';
import _ from 'loadsh'
import React, { useState } from 'react';
import ToastAlert from "../Toast";


interface IDataProps {
  set: any,
  data: any,
  open: any
}

const NewTransactionModal: React.FC<IDataProps> = (props) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')
  const [inOrOut, setInOrOut] = useState('')


  const handleData = (e: Event) => {

    e.preventDefault()
    props.set([...props.data, {
      id: _.uniqueId(),
      title,
      price,
      Type: type,
      dtInclude: new Date().toLocaleDateString(),
      InOrOut: inOrOut
    }])
    props.open()

    return <ToastAlert open={true} />

  }

  const handlInOrOutCome = (value: string) => {
    setInOrOut(value)
  }

  return (
    <Dialog.Portal >
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton >
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleData}>
          <input
            type="text"
            placeholder="Descrição"
            required
            onChange={(e) => setTitle(e.target.value)} />
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço"
            required />

          <input
            type="text"
            onChange={(e) => setType(e.target.value)}
            placeholder="Categoria"
            required />

          <TransactionType>

            <TransactionTypeButton
              onClick={(e) => handlInOrOutCome('income')}
              variant="income"
              value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton
              onClick={(e) => handlInOrOutCome('outcome')}
              variant="outcome"
              value="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit" >Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}

export default NewTransactionModal;

