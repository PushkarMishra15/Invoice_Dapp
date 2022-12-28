
import './App.css';
import {useState,useEffect} from 'react';
import { ethers } from "ethers";
import abi from "./contract/invoice.json";
import Buyer from './Components/Buyer';
import Navbar from './Components/Navbar';
import Transactions from './Components/Transactions';



function App() {
  
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x961E95031fdC41Bf675fB445D2bB31792C979EfA";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
 
  return (
    <>
      <Navbar/>
      {/* <Test/> */}
      <Buyer state={state}/>
     
       <Transactions state={state}/>
   </>
  );
}

export default App;
