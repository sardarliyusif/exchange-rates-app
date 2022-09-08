import { Card, InputNumber, Typography, SelectExchange } from "components";
import { StableCurrencies } from "components/StableCurrencies";
import { useContext } from "react";
import { context } from "context";
import { useState } from "react";
import { Rates } from "models";

function convert(
  value: number,
  from: string,
  to: string,
  rates: Rates
): number {
  return value * (rates[from] / rates[to]);
}
const App = () => {
  const [value, setValue] = useState<number>(100);
  const { from, to, rates, isLoading } = useContext(context);

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <div className="container">
      <SelectExchange />
      <Card direction="column">
        <Typography>Amount</Typography>
        <InputNumber inputValue={value} setInputValue={setValue} />
        <Typography>{convert(value, to, from, rates!)} {to}</Typography>
      </Card>
      <StableCurrencies value = {value}/>
    </div>
  );
};

export default App;
