import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummaryCard } from "./styles";
import React, { useEffect } from "react";

interface ISummaryValues {
  entrance: string;
  out: string;
  total: string;
}
interface IValuesProps {
  values: ISummaryValues;
}
// import { Container } from './styles';

const Summary: React.FC<IValuesProps> = (props) => {
  useEffect(() => {}, [props.values]);
  const { values } = props;
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ {values.entrance.replace(",", ".")}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ {values.out.replace(",", ".")}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ {values.total.replace(",", ".")}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
