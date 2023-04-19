import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../../assets/Logo.svg'
import NewTransactionModal from "../NewTransactionModal/index";

import React, { useState } from 'react';


interface IDataProps {
    set: any,
    data: any
}

const Header: React.FC<IDataProps> = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root open={open} onOpenChange={handleOpen}>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal set={props.set} data={props.data} open={handleOpen} />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>

    )
}

export default Header;
