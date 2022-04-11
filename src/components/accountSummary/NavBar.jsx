import Logo from '../Logo'
import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'
import { useNavigate } from 'react-router-dom'
import ACTION_TYPES from '../../ACTION_TYPES'
import { JobcoinButton } from '../../globalStyles'

const NavStyles = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${CONSTANTS.PURPLE};
    box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
`

const LogoWrapper = styled.div`
    width: 2em;
    margin: 0.5em;
`

const LeftNav = styled.div`
    align-items: center;
    display: flex;
`;

const RightNav = styled.div`
align-items: center;
    display: flex;
`;

const UserName = styled.p`
    margin: 1em;
`;

const Title = styled.h2`
    margin: 1em;

    @media (max-width: 400px){
        font-size: medium;
    }
`;

const NavBar = ({ state, dispatch }) => {
    const navigate = useNavigate()
    const handleSignOut = () => {
        dispatch({ type: ACTION_TYPES.SET_USERNAME, payload: null })
        dispatch({ type: ACTION_TYPES.SET_BALANCE, payload: null })
        dispatch({ type: ACTION_TYPES.SET_TRANSACTIONS, payload: [] })

        navigate(`${CONSTANTS.SIGNIN_URL}`)
    }
    return (
        <NavStyles>
            <LeftNav>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <Title>Account Summary</Title>
            </LeftNav>
            <RightNav>
                <UserName>Hello <b>{state.username}</b></UserName>
                <JobcoinButton onClick={handleSignOut}>Sign Out</JobcoinButton>
            </RightNav>
        </NavStyles>
    )
}

export default NavBar
