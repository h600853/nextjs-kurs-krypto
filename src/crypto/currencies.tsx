import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,

  },
  {
    symbol:"BTC",
    name:"Bitcoin",
    icon:<Icon component="img" src="/icons/bitcoin-btc-logo.svg" alt="Bitcoin" />
  },
  {
    symbol:"SOL",
    name:"Solana",
    icon:<Icon component="img" src="/icons/solana-sol-logo.svg" alt="Solana" />
  },
  {
    symbol:"ETH",
    name:"Ethereum",
    icon:<Icon component="img" src="/icons/ethereum-eth-logo.svg" alt="Ethereum" />
  },
  {
    symbol:"LTC",
    name:"Litecoin",
    icon:<Icon component="img" src="/icons/litecoin-ltc-logo.svg" alt="Litecoin" />
  },
  {
    symbol:"ADA",
    name:"Cardano",
    icon:<Icon component="img" src="/icons/cardano-ada-logo.svg" alt="Cardano" />
  },
  {
symbol:"XRP",
name:"XRP",
icon:<Icon component="img" src="/icons/xrp-xrp-logo.svg" alt="XRP" />
  }

    
  
];
