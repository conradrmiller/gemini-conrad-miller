import styled from 'styled-components'
import SignInWidget from './SingInWidget'

import CONSTANTS from '../../CONSTANTS'
import Logo from '../Logo'

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`

const LogoWrapper = styled.svg`
    width: 5em;
`


const SignIn = () => {
    return (
        <PageWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            <SignInWidget />

        </PageWrapper>
    )
}

export default SignIn
