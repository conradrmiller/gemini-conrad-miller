import axios from 'axios'

const addressInfoURL = 'https://jobcoin.gemini.com/writing-squirt/api/addresses/'
const transactionURL =
    'https://jobcoin.gemini.com/writing-squirt/api/transactions?callback=responseCallback'

export const getAddressInfo = (address) => {
    return axios
        .get(`${addressInfoURL}${address}`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}

export const postTransaction = (from, destination, amount) => {
    const postBody = {
        fromAddress: from,
        toAddress: destination,
        amount: amount,
    }

    return axios
        .post(transactionURL, postBody)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}
