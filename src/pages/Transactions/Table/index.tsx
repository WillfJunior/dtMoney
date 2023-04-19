import React, { useEffect, useState } from 'react';
import { TransactionsTable } from '../styles';
import Body from './Body';

interface ISearchProps {
    get: string,
    data: any
    handleDelete: any
}

const TableTransaction: React.FC<ISearchProps> = (props) => {

    useEffect(() => {
    }, [props.data])

    const filter = props.get.length > 0 ? props.data.filter((item: any) => item.title.toLowerCase().includes(props.get.toLowerCase())) : props.data


    return (
        <TransactionsTable>
            <Body data={filter} get={props.get} handleDelete={props.handleDelete} />
        </TransactionsTable>
    );
}

export default TableTransaction;