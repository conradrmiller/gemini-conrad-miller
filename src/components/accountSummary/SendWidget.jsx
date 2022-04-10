import { usesState, useState } from 'react'
import styled from 'styled-components'
import { postTransaction, getAddressInfo } from '../../apiCalls'
import CONSTANTS from '../../CONSTANTS'
import ACTION_TYPES from '../../ACTION_TYPES'

const SendContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    margin: 1em;
`

const SendHeader = styled.div`
    border-bottom: 1px solid ${CONSTANTS.GREY};
`

const InputContainer = styled.div`
    padding: 1em;
`

const InputWrapper = styled.div``

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
            <InputContainer>
                <InputWrapper>
                    <label>
                        Destination Address
                        <input
                            type="text"
                            onChange={(e) =>
                                setDestinationAddress(e.target.value)
                            }
                            value={destinationAddress}
                        />
                    </label>
                </InputWrapper>
                <InputWrapper>
                    <label>
                        Amount to Send
                        <input
                            type="number"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                        />
                    </label>
                </InputWrapper>
                <button
                    onClick={sendHandler}
                    disabled={!amount || !destinationAddress}
                >
                    Send Jobcoins
                </button>
            </InputContainer>
        </SendContainer>
    )
}

export default SendWidget
