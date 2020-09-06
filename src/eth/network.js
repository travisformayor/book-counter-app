import Web3 from 'web3';

let web3;
export function getWeb3() {
  if (!web3) {
    web3 = new Web3(Web3.givenProvider);
  }
  return web3;
}

export async function getAccount() {
  // const web3 = getWeb3();
  // const accounts = await web3.eth.getAccounts();
  // const accounts = await window.ethereum.enable();
  // const accounts = await window.ethereum.send('eth_requestAccounts');
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  return accounts[0];
}
