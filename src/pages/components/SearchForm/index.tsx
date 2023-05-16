import { SearchFormContainer } from "./styles";

interface ISearchProps {
    set: any
}

const SearchForm: React.FC<ISearchProps> = (props) => {
    const handleSearch = (value: string) => {
        props.set(value)

    }
    return (
        <SearchFormContainer>

            <input
                type="text"
                placeholder="Busque por Transações"
                onChange={(e) => handleSearch(e.target.value)}
            />

        </SearchFormContainer>
    )
}

export default SearchForm;