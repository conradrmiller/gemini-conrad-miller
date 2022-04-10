import Logo from '../Logo'
import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'
import {useNavigate} from 'react-router-dom';
import ACTION_TYPES from '../../ACTION_TYPES';

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


const NavBar = ({state, dispatch}) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        dispatch({type:ACTION_TYPES.SET_USERNAME, payload: null})
        dispatch({type:ACTION_TYPES.SET_BALANCE, payload: null})
        dispatch({type:ACTION_TYPES.SET_TRANSACTIONS, payload: []})
        

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
