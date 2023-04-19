import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Select from '@radix-ui/react-select';
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
  ArrowDown
} from 'phosphor-react';
import _ from 'loadsh'


interface IDataProps {
  set: any,
  data: any,
  open: any
}

import React, { useState } from 'react';


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
          {/* <Select.Root>
            <Select.Trigger className="SelectTrigger" aria-label="Food">
              <Select.Value placeholder="Select a fruit…" />
              <Select.Icon className="SelectIcon">
                <ArrowDown />
              </Select.Icon>
            </Select.Trigger>
          </Select.Root> */}
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

