import styled from 'styled-components'
import CONSTANTS from '../../CONSTANTS'

const ChartContainer = styled.div`
    border: 1px solid ${CONSTANTS.PURPLE};
    margin: 1em;
    height: 85vh;

`;

const BalanceChart = () => {
    return (
        <ChartContainer>
            OOOOOhhhh Pretty Chart
        </ChartContainer>
    )
}

export default BalanceChart;