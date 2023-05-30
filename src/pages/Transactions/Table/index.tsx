import React, { useEffect, useState } from 'react';
import { TransactionsTable } from '../styles';
import Body from './Body';

interface ISearchProps {
    get: ISearchObject,
    data: any
    handleDelete: any
}
interface ISearchObject {
    text: string,
    month: string
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

    console.log("🚀 ~ file: index.tsx:25 ~ props:", props)

    useEffect(() => {
    }, [props.data])

    const filter = props.get.text.length > 0 ? props.data.filter((item: IItemProps) =>
        item.title.toLowerCase().includes(props.get.text.toLowerCase())
        || item.Type.toLowerCase().includes(props.get.text.toLowerCase()))
        : props.data


    const extractData = (data: string, filter: string) => {
        let intialDate = data.split('/')[1]
        console.log("🚀 ~ file: index.tsx:40 ~ extractData ~ intialDate:", intialDate)
        return intialDate == filter ? data : props.data
    }

    return (
        <TransactionsTable>
            <Body data={filter} get={props.get.text} handleDelete={props.handleDelete} />
        </TransactionsTable>
    );
}

export default TableTransaction;