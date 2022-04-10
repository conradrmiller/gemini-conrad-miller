import styled from 'styled-components'
import { useNavigate} from "react-router-dom";
import CONSTANTS from '../../CONSTANTS';


const SignInWidgetWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid grey;
`




const SignInWidget = () => {

    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate(`${CONSTANTS.ACCOUNTSUMMARY_URL}`)

    }
    return (
        <SignInWidgetWrapper>
            <div>
                <h3>Welcome! Sign In With Your Jobcoin Address</h3>
            </div>
            <div>
                <label>
                    Jobcoin Address
                    <input type="text" />
                </label>
                <button onClick={handleSignIn }>
                    Sign In
                </button>
                
            </div>
        </SignInWidgetWrapper>
    )
}

export default SignInWidget
