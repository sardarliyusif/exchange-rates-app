import { useContext } from "react";
import { context } from "context";
import { IoLogoUsd , IoLogoEuro} from "react-icons/io5";
import { Rates, StableCurrenciesProps } from "models";
import { Card, Typography } from "components";

function convert(
  value: number,
  stable: 'USD' | 'RUB' | 'TRY' | 'EUR',
  from: string,
  rates: Rates,
): number {
  return value * (rates[stable] / rates[from]);
}

export const StableCurrencies = (props: StableCurrenciesProps) => {
  const {value} = props
  let stable = '';
  const { from, rates } = useContext(context);
  return (
    <div>
      <Card>
        <Typography><IoLogoUsd/> USD: {convert(value, stable = 'USD' , from, rates!)}</Typography>
      </Card>
      <Card>
        <Typography><IoLogoEuro/> EUR: {convert(value, stable = 'EUR' , from, rates!)}</Typography>
      </Card>
      <Card>
        <Typography><IoLogoUsd/> TRY: {convert(value, stable = 'TRY' , from, rates!)}</Typography>
      </Card>
      <Card>
        <Typography><IoLogoEuro/> RUB: {convert(value, stable = 'RUB' , from, rates!)}</Typography>
      </Card>
    </div>
  );
};
