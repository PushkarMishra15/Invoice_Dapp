// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.22 <0.9.0;

contract invoice {

    address public manager;
    
    struct Invoice{
     uint id;
     string buyerPan;
     string sellerPan;
     address payable seller;
     string data;
     uint amount;
    }
    
    constructor(){
     manager = msg.sender;
    }

    Invoice[] invo;

    function Tranct(uint _id, string memory _buyerPan, string memory _sellerPan, address payable _seller, string memory _data)public payable {

        invo.push(Invoice(_id,_buyerPan,_sellerPan,_seller,_data,msg.value));
        _seller.transfer(msg.value);
        
    }
    function getInvoice() public view returns(Invoice[] memory){
         
         return invo;

    }

}

//Address of contract: 0x961E95031fdC41Bf675fB445D2bB31792C979EfA