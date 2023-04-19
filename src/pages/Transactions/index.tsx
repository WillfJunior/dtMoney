import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Summary from "../components/Summary";
import TableTransaction from "./Table";
import { TransactionsContainer } from './styles';

export function Transactions() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([{
        id: 1,
        title: 'Desenvolvimento de Site',
        price: '12.000',
        Type: 'Venda',
        dtInclude: '13/04/2022',
        InOrOut: 'income'
    },
    {
        id: 2,
        title: 'Prestação',
        price: '6.000',
        Type: 'Custo',
        dtInclude: '13/04/2022',
        InOrOut: 'outcome'
    },
    {
        id: 3,
        title: 'Salário',
        price: '11.500',
        Type: 'Entrada',
        dtInclude: '17/04/2022',
        InOrOut: 'income'
    },
    {
        id: 4,
        title: 'Carro',
        price: '1.800',
        Type: 'Custo',
        dtInclude: '17/04/2022',
        InOrOut: 'outcome'
    },
    {
        id: 5,
        title: 'Condominio',
        price: '675,00',
        Type: 'Custo',
        dtInclude: '17/04/2022',
        InOrOut: 'outcome'
    }
    ]);

    const handleDelete = (id: Number) => {
        data.indexOf(id)
        setData(data.slice())
    }

    useEffect(() => { }, [data])

    return (
        <>
            <Header set={setData} data={data} />
            <Summary />

            <TransactionsContainer>
                <SearchForm set={setSearch} />
                <TableTransaction get={search} data={data} handleDelete={handleDelete} />
            </TransactionsContainer>
        </>
    )
}