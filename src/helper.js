import { switchCase } from "@babel/types";

export function calculateTotal(amount, terms){
    let totalAmount;
    if(amount <= 1000){
        totalAmount = amount * .25;
    }else if(amount > 1000 && amount <= 5000){
        totalAmount = amount * .20;
    }else if(amount > 5000 && amount <= 10000){
        totalAmount = amount * .15;
    }else{
        totalAmount = amount * .10;
    }

    return totalAmount;

    // let totalTerms;
    // switch (terms) {
    //     case '3':
    //         totalTerms = amount * .05;
    //         break;
    //     case '6':
    //         totalTerms = amount * .1;
    //         break;
    //     case 12:
    //         totalTerms = amount * .15;
    //         break;
    //     case '24': 
    //         totalTerms = amount * .2;
    //     default:
    //         break;
    // }
    // return amount + totalAmount + totalTerms;
}