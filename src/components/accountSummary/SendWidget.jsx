import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'

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

const SendWidget = () => {
    return (
        <SendContainer>
            <SendHeader>
                <h3>Send JobCoin</h3>
            </SendHeader>
            <InputContainer>
                <InputWrapper>
                    <label>
                        Destination Address
                        <input type="text" />
                    </label>
                </InputWrapper>
                <InputWrapper>
                    <label>
                        Amount to Send
                        <input type="text" />
                    </label>
                </InputWrapper>
                <button>Send Jobcoins</button>
            </InputContainer>
        </SendContainer>
    )
}

export default SendWidget
