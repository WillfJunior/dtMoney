import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Summary } from "../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions(){
    return (
        <div>
            <Header />
            <Summary />
            
            <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td><PriceHighLight varinat="income">R$ 12.000,00</PriceHighLight></td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Prestação</td>
                        <td><PriceHighLight varinat="outcome">- R$ 12.000,00</PriceHighLight></td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}