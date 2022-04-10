import styled from 'styled-components'

const SignInWidgetWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid grey;
`




const SignInWidget = () => {
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
                <button>Sign In</button>
            </div>
        </SignInWidgetWrapper>
    )
}

export default SignInWidget
