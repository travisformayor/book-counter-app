import { getWeb3, getAccount } from '../eth/network.js';
import Artifacts from './Artifacts.json';

export async function getDeployed() {
  const web3 = getWeb3();
  const from = await getAccount();
  const addr = process.env.REACT_APP_CONTRACT_ADDRESS;
  return Counter(web3, addr, { from });
}
export default function Counter(web3, address, options = {}) {
  // Factory like function to create new Contract abstraction js objects
  // (cont.) for interacting with the ethereum contract
  const name = 'contracts/Counter.sol:Counter';
  const artifact = Artifacts.contracts[name];
  const abi = JSON.parse(artifact.abi);
  return new web3.eth.Contract(abi, address, options);
}
