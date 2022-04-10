import Logo from '../Logo'
import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'
import {useNavigate} from 'react-router-dom';

const NavStyles = styled.nav`
    height: 4em;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${CONSTANTS.PURPLE};
`

const LogoWrapper = styled.div`
    width: 2em;
    margin: .5em;
`


const NavBar = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        navigate(`${CONSTANTS.SIGNIN_URL}`)

    }
    return (
        <NavStyles>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <h2>Account Summary</h2>
            <p>UserName Signed In</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </NavStyles>
    )
}

export default NavBar
