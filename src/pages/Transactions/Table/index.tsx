import React, { useEffect, useState } from 'react';
import { TransactionsTable } from '../styles';
import Body from './Body';

interface ISearchProps {
    get: string,
    data: any
    handleDelete: any
}

interface IItemProps {
    id: number,
    title: string,
    price: string,
    Type: string,
    dtInclude: string,
    InOrOut: string
}

const TableTransaction: React.FC<ISearchProps> = (props) => {

    useEffect(() => {
        console.log(props.get)
    }, [props.data])

    const filter = props.get.length > 0 ? props.data.filter((item: IItemProps) =>
        item.title.toLowerCase().includes(props.get.toLowerCase()) || item.Type.toLowerCase().includes(props.get.toLowerCase()))
        : props.data


    return (
        <TransactionsTable>
            <Body data={filter} get={props.get} handleDelete={props.handleDelete} />
        </TransactionsTable>
    );
}

export default TableTransaction;