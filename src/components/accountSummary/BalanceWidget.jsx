import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'

const BalanceContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    margin: 1em;
    border-radius: 0.25em;
    box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
`

const BalanceHeader = styled.div`
    text-align: center;
    border-bottom: 1px solid ${CONSTANTS.GREY};
`

const AmountContainer = styled.div`
    text-align: center;
    padding: 1em;
    font-weight: 600;
    font-size: 1.25em;
`

const BalanceWidget = ({ state }) => {
    return (
        <BalanceContainer>
            <BalanceHeader>
                <h3>Jobcoin Balance</h3>
            </BalanceHeader>
            <AmountContainer>{state.balance}</AmountContainer>
        </BalanceContainer>
    )
}

export default BalanceWidget
