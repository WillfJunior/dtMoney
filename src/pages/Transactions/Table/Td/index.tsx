import React from 'react';

interface TdProps {
    item: String;
}

const Td: React.FC<TdProps> = (props) => {
    return <td >{props.item}</td>;
}

export default Td;