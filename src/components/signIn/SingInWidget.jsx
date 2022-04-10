import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import CONSTANTS from '../../CONSTANTS'
import ACTION_TYPES from '../../ACTION_TYPES'

const SignInWidgetWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid ${CONSTANTS.PURPLE};
`

const SignInHeader = styled.div`
    padding: 1em;
    border-bottom: 1px solid ${CONSTANTS.GREY};
`
const InputContainer = styled.div`
    padding: 1em;
`

const SignInWidget = ({state, dispatch}) => {
    const [signInInput, setSignInInput] = useState('')

    const navigate = useNavigate()
    const handleSignIn = () => {
        dispatch({type: ACTION_TYPES.SET_USERNAME, payload: signInInput})
        setSignInInput('')
        navigate(`${CONSTANTS.ACCOUNTSUMMARY_URL}`)
    }

    return (
        <SignInWidgetWrapper>
            <SignInHeader>
                <h3>Welcome! Sign In With Your Jobcoin Address</h3>
            </SignInHeader>
            <InputContainer>
                <div>
                    <label>
                        Jobcoin Address
                        <input
                            type="text"
                            onChange={(e) => setSignInInput(e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={handleSignIn} disabled={!signInInput}>Sign In</button>
            </InputContainer>
        </SignInWidgetWrapper>
    )
}

export default SignInWidget
