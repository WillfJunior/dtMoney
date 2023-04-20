import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Summary from "../components/Summary";
import TableTransaction from "./Table";
import { TransactionsContainer } from "./styles";

export function Transactions() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const handleDelete = (id: Number) => {
        data.indexOf(id);
        setData(data.slice());
    };

    useEffect(() => { }, [data]);

    let values = {
        entrance: "",
        out: "",
        total: "",
    };

    const handleSumValues = () => {
        let sum = 0;
        let coast = 0;
        let entrance = 0;
        data.map((item, idx) => {
            sum += parseFloat(item.price);

            if (item.InOrOut === "outcome") coast += parseFloat(item.price);

            if (item.InOrOut === "income") entrance += parseFloat(item.price);
        });
        values.total = (entrance - coast).toLocaleString();

        values.entrance = entrance.toLocaleString();
        values.out = coast.toLocaleString();
    };

    handleSumValues();

    return (
        <>
            <Header set={setData} data={data} />
            <Summary values={values && values} />

            <TransactionsContainer>
                <SearchForm set={setSearch} />
                <TableTransaction
                    get={search}
                    data={data}
                    handleDelete={handleDelete}
                />
            </TransactionsContainer>
        </>
    );
}
