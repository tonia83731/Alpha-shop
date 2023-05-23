import {createContext} from 'react';

const creditCardData = {
  cardHolder: "",
  cardNum: "",
  expireDate: "",
  cvc: ""
}


export const CreditCardContext = createContext(creditCardData)
