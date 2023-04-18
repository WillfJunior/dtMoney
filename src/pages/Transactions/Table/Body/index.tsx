import React, { useEffect } from 'react';
import Tr from '../Tr';


interface TRProps {
    data: TBodyProps[],
    get: string
    handleDelete: any
}

interface TBodyProps {
    id: number,
    title: string,
    price: string,
    Type: string,
    dtInclude: string,
    InOrOut: string
}


const Body: React.FC<TRProps> = (props) => {
    const { data } = props



    return (
        <tbody >
            {data.map((item, idx) => (
                <Tr data={item} key={idx} handleDelete={props.handleDelete} />

            ))}
        </tbody>
    );
}

export default Body;