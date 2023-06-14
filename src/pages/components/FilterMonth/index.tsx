import React from 'react';
import Select from 'react-select'
import { FilterContainer } from './styles';

const options = [
    { value: '0', label: 'Janeiro' },
    { value: '1', label: 'Fevereiro' },
    { value: '2', label: 'Março' },
    { value: '3', label: 'Abril' },
    { value: '4', label: 'Maio' },
    { value: '5', label: 'Junho' },
    { value: '6', label: 'Julho' },
    { value: '7', label: 'Agosto' },
    { value: '8', label: 'Setembro' },
    { value: '9', label: 'Outubro' },
    { value: '10', label: 'Novembro' },
    { value: '11', label: 'Dezembro' }
]


interface FilterMonthProps {
    change: any
}
const FilterMonth: React.FC<FilterMonthProps> = (data) => {

    const month = new Date();
    return (
        <FilterContainer>
            <label>Filtro Por mes:</label>
            <Select options={options}
                defaultValue={options[month.getMonth()]}
                name="months"
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => data.change('', e?.value)}
            />
        </FilterContainer>)
}
export default FilterMonth;