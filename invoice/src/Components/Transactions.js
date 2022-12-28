import React from 'react'
import { useState,useEffect } from 'react'
import "./Transaction.css";

export default function Transactions({state}) {
 
   const [info, setinf] = useState([]);
   const {contract} = state;
   
    useEffect(()=>{

    const transaction_info=async()=>{
        const info = await contract.getInvoice();
        setinf(info);
    };
    contract && transaction_info();
   },[contract]);
 
    return (
    <>
       <h5> <p style={{margin:"30px 760px"}}> Transactions</p></h5>
       <table>
        <tbody>
        <tr >
                                <td style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}><h6> ID Number</h6></td>
                                <td style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}><h6>Buyer Pan</h6></td>
                                <td style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}><h6>Seller Pan</h6></td>
                                <td style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}><h6>Seller Address</h6></td>
                                <td style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}><h6>Message</h6></td>
                                <td style={{
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}><h6>Amount(In Wei)</h6></td>
                              </tr>
        </tbody>
       </table>
      {info.map((infos)=>{return(
                     <table key = {infos.id} >
                             <tbody>
                            
                                <tr >
                                  <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{String(infos.id)}</td>
                                  <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{infos.buyerPan}</td>
                                  <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{infos.sellerPan}</td>
                                  <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{infos.seller}</td>
                                  <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{infos.data}</td>
                                  <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{String(infos.amount)}</td>
                            
                                </tr>
                             </tbody>
                     </table>
      )})}
      </>


  )
}
