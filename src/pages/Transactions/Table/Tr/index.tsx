import React from 'react';
import { PriceHighLight } from '../../styles';
import Td from '../Td';
import { Trash } from 'phosphor-react';


interface TrReceivedProps {
    id: number,
    title: string,
    price: string,
    Type: string,
    dtInclude: string,
    InOrOut: string
}
interface TrProps {
    data: TrReceivedProps
    handleDelete: any
}


const Tr: React.FC<TrProps> = (props) => {
    const { data } = props
    return (
        <tr key={data.id}>
            <td width="40%">{data.title}</td>
            <td>
                <PriceHighLight varinat={data.InOrOut}>R$ {data.price}</PriceHighLight>
            </td>
            <Td item={data.Type} />
            <Td item={data.dtInclude} />
            <td>
                <Trash size={22} color='red' onClick={() => props.handleDelete(data.id)} />
            </td>
        </tr>
    );
}

export default Tr;