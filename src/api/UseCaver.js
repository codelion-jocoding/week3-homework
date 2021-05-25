import Caver from 'caver-js';
import GreetingABI from '../abi/GreetingABI.json';
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, GREET_CONTRACT_ADDRESS, CHAIN_ID } from '../constants';
const option = {
  headers: [
    {
      name: "Authorization",
      value: "Basic " + Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCESS_KEY).toString("base64")
    },
    {name: "x-chain-id", value: CHAIN_ID}
  ]
}

const caver =  new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option));
const GreetContract = new caver.contract(GreetingABI, GREET_CONTRACT_ADDRESS);

export const getGreeting = async () => {
  const _greet = await GreetContract.methods.greet().call();
  return _greet
}