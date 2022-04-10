import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'

const BalanceContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    margin: 1em;
`

const BalanceHeader = styled.div`
    border-bottom: 1px solid ${CONSTANTS.GREY};
`

const AmountContainer = styled.div`
    padding: 1em;
`

const BalanceWidget = ({state}) => {
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
