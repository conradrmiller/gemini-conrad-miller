import axios from "axios";

const addressInfoURL = 'http://jobcoin.gemini.com/writing-squirt/api/addresses/'
const transactionURL = 'http://jobcoin.gemini.com/writing-squirt/api/transactions'

export const getAddressInfo = address => {
    return axios.get(`${addressInfoURL}${address}`)
    .then(response => {
        return response;
        
    })
    .catch(error => {
        console.log(error)
    })

}