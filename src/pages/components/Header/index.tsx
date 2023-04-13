import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../../assets/Logo.svg'
import { NewTransactionModal } from "../NewTransactionModal/index";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />


                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transacao</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>

    )
}