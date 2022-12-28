const {expect} = require("chai");
const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");


describe("Invoice Contract", function(){

  
    it("Test for Registration ",async function(){

        const[owner,addr1,addr2,...addrs] = await ethers.getSigners();

        console.log("Signers object : ", owner);
        const Invoice = await ethers.getContractFactory("invoice");
        
        const hardhatInvoice = await Invoice.deploy();
        console.log("Owner address : ", owner.address);
        
        hardhatInvoice.connect(addr1);
        console.log("Addr 1: ",addr1.address);
        await hardhatInvoice.Tranct("ABC","EFG",addr1.address,"Rent",100000000000000);
        const result = hardhatInvoice.requests();
        console.log("result :",result);

    })
}) 
