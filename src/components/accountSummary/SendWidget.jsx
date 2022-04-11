import { useState } from 'react'
import styled from 'styled-components'
import { postTransaction, getAddressInfo } from '../../apiCalls'
import CONSTANTS from '../../CONSTANTS'
import ACTION_TYPES from '../../ACTION_TYPES'
import { JobcoinButton } from '../../globalStyles'

const SendContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    border-radius: 0.25em;
    box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
`

const SendHeader = styled.div`
    text-align: center;
    border-bottom: 1px solid ${CONSTANTS.GREY};
`

const InputContainer = styled.form`
    text-align: center;
    padding: 1em;
`

const InputWrapper = styled.div`
    margin: 1em 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InputLabel = styled.label`
    margin: 0.25em;
`

const AmountInput = styled.input`
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const SendWidget = ({ state, dispatch }) => {
    const [destinationAddress, setDestinationAddress] = useState()
    const [amount, setAmount] = useState()

    const sendHandler = () => {
        postTransaction(state.username, destinationAddress, amount).then(() => {
            getAddressInfo(state.username).then((response) => {
                dispatch({
                    type: ACTION_TYPES.SET_BALANCE,
                    payload: response?.data?.balance,
                })
                dispatch({
                    type: ACTION_TYPES.SET_TRANSACTIONS,
                    payload: response?.data?.transactions,
                })
            })
        })
        alert(`You have successfully sent ${amount} to ${destinationAddress}`)
        setDestinationAddress('')
        setAmount('')
    }

    return (
        <SendContainer>
            <SendHeader>
                <h3>Send JobCoin</h3>
            </SendHeader>
            <InputContainer
                id="sendWidget"
                onSubmit={(e) => e.preventDefault()}
            >
                <InputWrapper>
                    <InputLabel htmlFor="destinationAddress">
                        Destination Address
                    </InputLabel>

                    <input
                        id="destinationAddress"
                        type="text"
                        onChange={(e) => setDestinationAddress(e.target.value)}
                        value={destinationAddress}
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel htmlFor="amountToSend">
                        Amount to Send
                    </InputLabel>

                    <AmountInput
                        id="amountToSend"
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </InputWrapper>
                <JobcoinButton
                    onClick={sendHandler}
                    disabled={!amount || !destinationAddress}
                    type="submit"
                    form="sendWidget"
                >
                    Send Jobcoins
                </JobcoinButton>
            </InputContainer>
        </SendContainer>
    )
}

export default SendWidget
