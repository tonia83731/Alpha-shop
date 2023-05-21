import {createContext} from 'react';

const creditCardData = {
  cardUser: "",
  cardNum: "",
  expireDate: "",
  cvc: ""
}


export const CreditCardContext = createContext(creditCardData)
