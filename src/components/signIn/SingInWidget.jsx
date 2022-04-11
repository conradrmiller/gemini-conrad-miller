import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import CONSTANTS from '../../CONSTANTS'
import ACTION_TYPES from '../../ACTION_TYPES'
import { JobcoinButton } from '../../globalStyles'

const SignInWidgetWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid ${CONSTANTS.PURPLE};
    border-radius: 0.25em;
    box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
    max-width: 350px;


`

const SignInHeader = styled.div`
    text-align: center;
    padding: 1em;
    border-bottom: 1px solid ${CONSTANTS.GREY};
`
const InputContainer = styled.div`
    text-align: center;
    padding-bottom: 1em;
`
const InputWrapper = styled.div`
    margin: 1em 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const InputLabel = styled.label`
    margin: 0.5em;
`;


const SignInWidget = ({ state, dispatch }) => {
    const [signInInput, setSignInInput] = useState('')

    const navigate = useNavigate()
    const handleSignIn = () => {
        dispatch({ type: ACTION_TYPES.SET_USERNAME, payload: signInInput })
        setSignInInput('')
        navigate(`${CONSTANTS.ACCOUNTSUMMARY_URL}`)
    }

    return (
        <SignInWidgetWrapper>
            <SignInHeader>
                <h3>Welcome! Sign In With Your Jobcoin Address</h3>
            </SignInHeader>
            <InputContainer>
                <InputWrapper>
                    <InputLabel htmlFor="signIn">Jobcoin Address</InputLabel>
                    <input
                        id="signIn"
                        type="text"
                        onChange={(e) => setSignInInput(e.target.value)}
                    />
                </InputWrapper>
                <JobcoinButton onClick={handleSignIn} disabled={!signInInput}>
                    Sign In
                </JobcoinButton>
            </InputContainer>
        </SignInWidgetWrapper>
    )
}

export default SignInWidget
