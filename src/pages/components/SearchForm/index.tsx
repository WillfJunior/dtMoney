import { useState } from "react";
import FilterMonth from "../FilterMonth";
import { SearchFormContainer, FilterMonthContainer } from "./styles";

interface ISearchProps {
    set: any
}

const SearchForm: React.FC<ISearchProps> = (props) => {
    const [changeMonth, setChangeMonth] = useState('');
    const handleSearch = (value: string, month: string) => {
        // console.log("🚀 ~ file: index.tsx:9 ~ props:", month)
        setChangeMonth(month)
        props.set({
            text: value,
            month
        })

    }
    return (
        <>
            <FilterMonthContainer>
                <FilterMonth change={handleSearch} />
            </FilterMonthContainer>
            <SearchFormContainer>
                <input
                    type="text"
                    placeholder="Busque por Transações"
                    onChange={(e) => handleSearch(e.target.value, changeMonth)}
                />
            </SearchFormContainer>

        </>
    )
}

export default SearchForm;