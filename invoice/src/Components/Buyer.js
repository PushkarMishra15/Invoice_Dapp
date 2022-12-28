import React from 'react'
import "./Buyer.css";
import {ethers} from 'ethers';

export default function Buyer({state}) {

const Submit=async(event)=>{
    event.preventDefault();
    const {contract} = state;
   const id = document.querySelector("#id").value;
   const Bpan = document.querySelector("#Bpan").value;
   const Span = document.querySelector("#Span").value;
   const Seller_Address = document.querySelector("#seller_address").value;
   const amount = document.querySelector("#amount").value;
   const msg = document.querySelector("#message").value;
   const new_amount = {value:ethers.utils.parseEther(amount)};
   const transaction = await contract.Tranct(id,Bpan,Span,Seller_Address,msg,new_amount);
   transaction.wait();
   console.log("Transaction is done");
} 

  return (
    <>
    <div className="Econtainer1">
    <style>{'body { background-color: #d6d5e7}'}</style>
    <div className="Econtainer">
        <div id="Eregister">
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ID Number</label>
          <input type="email" className="form-control" id="id"  aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Buyer Pan</label>
          <input type="email" className="form-control" id="Bpan"   aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Seller Pan</label>
          <input type="email" className="form-control"  id="Span" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Seller Address</label>
          <input type="text" className="form-control" id="seller_address"   />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
          <input type="number" className="form-control" id="amount" placeholder='In eth'/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
          <input type="text" className="form-control" id="message" />
        </div>
       
      </form>
        
        </div>
    </div>
    <button className="Ebtn" onClick={Submit}>Transact</button>
    {/* <div className="Estatus">
     
    </div>
     */}
    </div>

    </>
  )
}
